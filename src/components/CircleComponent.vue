<template >
<div :class="small ? 'h-[25vh]' : 'h-[40vh]'" class="aspect-square rounded-full circual-card flex items-center justify-center
 text-center"
    >
<!--  <div class="background rounded-full" :style="'background-image: linear-gradient( rgba(30, 115, 190, .8), rgba(30, 115, 190, .8)), url('+image+')'"></div>-->
  <div class="background rounded-full"></div>

  <span :class="small ? 'text-xl' : 'text-4xl'" class="max-w-[80%] text-background school-name" v-html="schoolName"></span></div>
</template>

<script setup lang="ts">

const props = defineProps<{
  image: string,
  schoolName: string,
  small: boolean
}>()

</script>

<style scoped>
.circual-card {
  position: relative;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  transition: .3s ease-in;
  z-index: 0;
  /*background-color: #D8a059;*/
  background-image: url('../assets/circle_bg.jpeg');
}

.circual-card:hover .background {
  filter: brightness(70%);
  transition: .5s ease-out;
  box-shadow: 0 0 3em #4f483e;
}
.circual-card:hover .school-name{

}

.school-name {
color: #4f483e;
  text-wrap: avoid;
  z-index: 1;
}
</style>