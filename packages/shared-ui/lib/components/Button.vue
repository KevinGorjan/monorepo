<template>
    <a @click="click" href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
        <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span class="relative px-6 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400 bg-orange-500">
            <slot />
        </span>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
  click: { type: Function, required: true },
  btnClass: String
})
</script>