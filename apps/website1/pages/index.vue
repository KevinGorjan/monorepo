<template>
  <KeepAlive exclude="['Button']">
    <sui-button :click="handleOnClick" :btnclass="'bg-red-500'"> 
      <span class="relative">{{ $hello('website 1') }}</span>
    </sui-button>
  </KeepAlive>
</template>

<script setup lang="ts">
const handleOnClick = () => alert('Hellow!')
</script>


