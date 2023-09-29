<template>
<div :class="small ? 'h-[25vh]' : 'h-full'" class="aspect-square rounded-full circual-card flex items-center justify-center
 text-center"
    :style="'background-image: linear-gradient( rgba(30, 115, 190, .5), rgba(30, 115, 190, .5)), url('+image+')'">
    <span class="max-w-[80%] text-white ">{{schoolName}}</span></div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
const props = defineProps<{
  image: string,
  schoolName: string,
  small: boolean
}>()

</script>

<style scoped>
.circual-card{
  background-size: cover;
  transition: .3s ease-in;
}
.circual-card:hover{
  filter: brightness(50%);
  transition: .3s ease-out;
  box-shadow: 0 0 3em rgb(30, 115, 190);
}
</style>