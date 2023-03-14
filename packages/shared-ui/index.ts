import { addPlugin, defineNuxtModule, createResolver, extendPages } from '@nuxt/kit';
import {join} from 'path'

export default defineNuxtModule({
    setup(_, nuxt) {
        nuxt.hook('components:dirs', dirs => {
            dirs.push({
              path: join(__dirname, 'lib/components'),
              prefix: 'sui',
            })
          })

        const { resolve } = createResolver(import.meta.url)

        // add the helper plugin
        addPlugin(resolve('lib/plugins/helpers.ts'))

        extendPages((pages) => {
          pages.push({
            name: 'demo',
            path: '/demo',
            file: resolve(__dirname, './lib/pages/Demo.vue')
          })
        })
    }
})