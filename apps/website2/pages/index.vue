<template>
  <div>
    <sui-button :click="handleOnClick"> {{ $hello('website 2') }} </sui-button> 
  </div>
</template>

<script setup lang="ts">
const handleOnClick = () => alert('Hellow!')
</script>