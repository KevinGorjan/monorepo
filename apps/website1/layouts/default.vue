<template>
  <div>
    <h1 class="text-xl">Welcome to website 1</h1>
    <slot />
    <hr />
    <div
      class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
        class="max-w-xs transition duration-300 ease-in-out hover:scale-105"
        alt="Louvre" />
    </div>
  </div>
</template>
