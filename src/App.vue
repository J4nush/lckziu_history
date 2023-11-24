<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import {onMounted, ref, watch} from "vue";

// const router = useRouter()
// const route = useRoute()
// const timeoutId = ref()
//
//
//
// onMounted(() => {
//   resetTimer();
//   window.addEventListener('mousemove', resetTimer);
//   window.addEventListener('keypress', resetTimer);
// });
// const redirectToHome = () => {
//   if (route.path !== '/') {
//     router.push('/');
//   }
// };
// const resetTimer = () => {
//   clearTimeout(timeoutId.value);
//   timeoutId.value = setTimeout(redirectToHome, 1800000); // 3 minuty = 180000 milisekund
// };
//
// watch(() => route.path, (newPath) => {
//   if (newPath === '/') {
//     clearTimeout(timeoutId.value);
//   }
//   resetTimer();
//
// });


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
  /*background-image: linear-gradient(rgba(33, 116, 190, 0.53),rgba(33, 116, 190, 0.5)) , url("assets/bg_photo.JPG");
  background-image: linear-gradient(rgba(30, 115, 190, .8),rgba(30, 115, 190, .8)) , url("assets/bg_photo.JPG");
  //background-image: linear-gradient(rgba(29, 114, 189, 0.8),rgba(29, 114, 189, .8)) , url("assets/bg_photo.JPG");*/
  background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url("assets/bg_photo_v2.png");

  background-repeat: repeat-y;
  background-size: cover;
  z-index: -3;
}
</style>
