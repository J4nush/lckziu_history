<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import StartComponent from './components/StartComponent.vue'
</script>

<template>
  <div>
<RouterView></RouterView>
  </div>
</template>

<style scoped>
div{
  min-height: 100vh;
  height: 100%;
  /*background-image: linear-gradient(rgba(33, 116, 190, 0.53),rgba(33, 116, 190, 0.5)) , url("assets/bg_photo.JPG");*/
  background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url("assets/bg_photo.JPG");

  background-repeat: repeat-y;
  background-size: cover;
  z-index: -3;
}
</style>
