<template >
<div :class="small ? 'h-[25vh]' : 'h-[35vh]'" class="aspect-square rounded-full circual-card flex items-center justify-center
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
  background-color: rgb(215, 215, 215);
}

.circual-card:hover .background {
  filter: brightness(80%);
  transition: .3s ease-out;
  box-shadow: 0 0 3em rgb(30, 115, 190);
}

.school-name {
color: rgb(30, 115, 190);
  text-wrap: avoid;
  z-index: 1;
}
</style>