<script setup lang="ts">
import Carousel from 'primevue/carousel';
import Galleria from "primevue/galleria";
import {ref} from 'vue'

defineProps<{
  items?: Array<JSON>
}>()
const activeIndex = ref(0);

const displayCustom = ref(false);
const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
</script>

<template>
<!--  {{items}}-->
  <Carousel :value="items" :numVisible="1" :numScroll="1"
             containerClass="w-full" contentClass="flex flex-row justify-between">

    <template #item="slotProps">
      <div class="flex flex-row max-h-[80vh] h-full">
      <div :class="slotProps.data.images.length ? 'basis-1/2 border-r-2 pl-5 pr-5' : ''" class="text-center flex justify-center items-center pl-10 pr-10">
        <span>
        {{ slotProps.data.text }}
        </span>
      </div>
      <div  v-if="slotProps.data.images.length" class="basis-1/2 max-h-[70vh] h-full flex  aspect-auto justify-center" :class="slotProps.data.images.length == 1 ? 'items-center pl-5 pr-5' : ''">
        <Galleria :value="slotProps.data.images"  :numVisible="5" v-if="slotProps.data.images.length > 1"
                  containerStyle="max-width: 80%"
                  :pt="{
          thumbnailItemsContainer: {
            class: 'max-h-[15vh] flex items-center',
          },
          thumbnailItem: {
            class: 'pl-2 pr-2 max-h-[15vh] aspect-auto',
          },
          thumbnailItemContent: {
            class: 'max-h-[15vh] aspect-auto',
          },
                  }"
        >
          <template #item="imagesProps">
<!--            {{imagesProps.item}}-->
            <img  class="aspect-auto max-h-[50vh]" :src="imagesProps.item.replace(/ /g, '%20').replace('..', '/src')"   />
          </template>
          <template #thumbnail="imagesProps" v-if="slotProps.data.images.length > 1">
            <img class="aspect-auto max-h-[15vh]" :src="imagesProps.item.replace(/ /g, '%20').replace('..', '/src')"  />
          </template>
        </Galleria>
        <div v-else clss="h-full w-full flex justify-center items-center pl-5 pr-5">
          <img class=" aspect-auto max-h-[70vh]" :src="slotProps.data.images[0].replace(/ /g, '%20').replace('..', '/src')" />
        </div>


      </div>

      </div>
    </template>
  </Carousel>
</template>

<style >
.p-galleria.p-component.p-galleria-thumbnails-bottom{
  max-height: 50vh;
}
</style>