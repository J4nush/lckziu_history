<script setup lang="ts">
import Carousel from 'primevue/carousel';
import Galleria from "primevue/galleria";
import {onMounted, ref, toRef, watch} from 'vue'
import Image from 'primevue/image';
const props = defineProps<{
  items?: Array<JSON>
}>()
const emit = defineEmits(['loaded'])
onMounted(()=>{
  setTimeout(function() {
    emit('loaded')
  }, 500);
})


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
        <Galleria aathumbnailsPosition="top" :circular="true" :value="slotProps.data.images"  :numVisible="slotProps.data.images.length <= 4 ? slotProps.data.images.length : 4 " v-if="slotProps.data.images.length > 1"
                  containerStyle="max-width: 80%"
                  :showThumbnails="false"
                  indicatorsPosition="top"
                  :showIndicators="true"
                  :ashowThumbnailNavigators="slotProps.data.images.length <= 4 ? false : true"
                  :showItemNavigators="true"
                  :pt="{
                    previousItemButton: {
                      class: 'z-10'
                    },
          thumbnailItemsContainer: {
            class: 'max-h-[10vh] flex items-center content-center',
          },
          thumbnailItems:{
            class: 'content-center'
          },
          thumbnailItem: {
            class: 'pl-2 pr-2 max-h-[10vh] aspect-auto',
          },
          thumbnailItemContent: {
            class: 'max-h-[10vh] aspect-auto',
          },
                  }"
        >
          <template #item="imagesProps">
<!--            {{imagesProps.item}}-->
            <Image  class="aspect-auto max-h-[50vh] z-0" :src="imagesProps.item.replace(/ /g, '%20').replace('..', '/src')"
                    :pt="{
              image:{class: 'max-h-[50vh]'}
                    }"
                    preview />
          </template>
<!--          <template #thumbnail="imagesProps" v-if="slotProps.data.images.length > 1">-->
<!--            <img class="aspect-auto max-h-[10vh]" :src="imagesProps.item.replace(/ /g, '%20').replace('..', '/src')"  />-->
<!--          </template>-->
        </Galleria>
        <div v-else class="h-full w-full flex justify-center items-center pl-5 pr-5">
          <Image class=" aspect-auto max-h-[70vh]" :src="slotProps.data.images[0].replace(/ /g, '%20').replace('..', '/src')" :pt="{
              image:{class: 'max-h-[70vh]'},
              toolbar:{class:'z-10'},
              preview: {class: 'max-h-[85vh]'}
                    }"
                 preview />
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