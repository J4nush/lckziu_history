<script setup lang="ts">

import Timeline from "primevue/timeline";
import globalState from "@/globalState";
import {useRouter} from 'vue-router'
const router = useRouter()

const props = defineProps<{
  events?: Array<JSON>
}>()

const changeLoad = () => {
  globalState.value.loading = !globalState.value.loading
}
const goToView = (path)=> {
  changeLoad()
  setTimeout(function() {
    router.push(path)
  }, 500);

}
</script>

<template>
  <Timeline class="xl:hidden " :value="events" layout="vertical" :pt="{
      content: {
        class: 'flex items-center ml-[-1rem]'
      },
      connector:{
        class: 'm-[-1rem] min-h-[3rem]'
      }
    }">
    <template #marker="slotProps">
      <div class="marker-bg rounded-full cursor-pointer hover:animate-pulse m-4" v-tooltip="'Zobacz wiecej'" @click="goToView(slotProps.item?.to)">
        <i class="pi pi-history m-4" style="font-size: 3rem"></i>
      </div>
    </template>
    <template #content="slotProps" >
      <p class="absolute text-white text-[1.5rem]" style="">
        {{ slotProps.item.data }}
      </p>

    </template>
  </Timeline>
  <Timeline class="hidden xl:flex" :value="events" layout="horizontal" align="top" :pt="{
    content:{
      class: 'ml-[-1.25rem]'
    }
  }">
    <template #marker="slotProps">
      <div class="p-4 marker-bg rounded-full cursor-pointer hover:animate-pulse" v-tooltip="'Zobacz wiecej'" @click="goToView(slotProps.item?.to)">
        <i class="pi pi-history" style="font-size: 3rem"></i>
      </div>
    </template>
    <template #content="slotProps" >
      <p class="absolute text-white text-[1.5rem] min-w-[9ch]" style="">
        {{ slotProps.item.data }}
      </p>

    </template>
  </Timeline>
</template>

<style scoped>

</style>