<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import {onMounted, ref, watch} from "vue";

const router = useRouter()
const route = useRoute()
const timeoutId = ref()

const handleUserActivity = () => {
  console.log("user")
  if (route.path !== '/') {
    resetTimer();
  }
};

onMounted(() => {
  resetTimer();
  window.addEventListener('mousemove', handleUserActivity);
  window.addEventListener('keypress', handleUserActivity);
});
const redirectToHome = () => {
  if (route.path !== '/') {
    router.push('/');
  }
};
const checkInactivity = () => {
  if (route.path !== '/') {
    redirectToHome();
  }
};
const resetTimer = () => {
  console.log("reset")
  clearTimeout(timeoutId.value);
  if (route.path !== '/') {
    timeoutId.value = setTimeout(checkInactivity, 240000); // 3 minuty = 180000 milisekund  }
  }
}

watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    clearTimeout(timeoutId.value);
  }
  resetTimer();

});


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
