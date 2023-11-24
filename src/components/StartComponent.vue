<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import { ref } from 'vue'
import MenuComponent from '../components/MenuComponent.vue'
import globalState from "@/globalState";
import LoadingScreen from "@/components/LoadingScreen.vue";
import CircleComponent from "@/components/CircleComponent.vue";
import Dialog from "primevue/dialog";
import Button from 'primevue/button'


const router = useRouter()
const goToMagnolka = () => {
    router.push({ path: '/magnoliowa' })
}
const goToZS6 = () =>{
  router.push({ path: '/zs6' })
}

const goToSnD = () =>{
  router.push({ path: '/snd' })
}

const goToZSPiT = () =>{
  router.push({ path: '/zspit' })
}

const showModal = ref(true);

</script>
<template>

  <transition>
    <template v-if="globalState.loading">
      <LoadingScreen />
    </template>
  </transition>
  <Dialog v-if="!globalState.loading" v-model:visible="showModal" modal :style="{ width: '80vw', }" class="addPaperBackground text-white" :closable="false">
    <template #header>
      <h1>70-lecie <b>LCKZiU</b></h1>
    </template>
    <p>
      dsadasdfsdohsadfh iwqudibwqih
    </p>
    <template #footer>
      <div class="w-full flex flex-row items-center content-center text-center">
        <span class="m-auto">
        <Button class="ml-auto mr-auto" icon="pi pi-eye" severity="info" label="Zacznij oglądać" @click="()=>{showModal = false}" :pt="{
          root: {
            'class': 'customButtonBg'
          }
        }"/>
        </span>
      </div>

    </template>
  </Dialog>
    <MenuComponent :items="[]"/>
        <main>
          <div class="hidden xl:flex wrapper flex-row gap-10 justify-center items-center w-100 p-4 min-h-[80vh]">
            <CircleComponent :small="true" schoolName="Zespół Szkół Pedagogicznych <br/>i Technicznych" :image="`src/assets/zdpt_thumb.jpg`" @click="goToZSPiT"/>
            <CircleComponent :small="true" schoolName="Zespół Szkół przy ulicy Długosza" :image="`src/assets/dlugosza_thumb.jpg`" @click="goToSnD"/>
            <CircleComponent :small="true" schoolName="Zespół Szkół nr 6" :image="`src/assets/dlugosza_thumb.jpg`" @click="goToZS6"/>
            <CircleComponent :small="false" :image="`src/assets/lckziu_thumb.jpg`" school-name="Szkoła przy ulicy Magnoliowej 8" @click="goToMagnolka"/>
          </div>
          <div class="xl:hidden wrapper flex flex-col gap-2 justify-center w-100 p-4">
            <div class="flex flex-row justify-center items-center">
              <CircleComponent :small="false" :image="`src/assets/lckziu_thumb.jpg`" school-name="Szkoła przy ulicy Magnoliowej 8" @click="goToMagnolka"/>
            </div>
            <div class="flex flex-row justify-center items-center flex-wrap gap-10">
              <CircleComponent :small="true" schoolName="Zespół Szkół Pedagogicznych i Technicznych" :image="`src/assets/zdpt_thumb.jpg`" @click="goToZSPiT"/>
              <CircleComponent :small="true" schoolName="Zespół Szkół przy ulicy Długosza" :image="`src/assets/dlugosza_thumb.jpg`" @click="goToSnD"/>
              <CircleComponent :small="true" schoolName="Zespół Szkół nr 6" :image="`src/assets/dlugosza_thumb.jpg`" @click="goToZS6"/>

            </div>
          </div>
        </main>
</template>
<style >


.big_header_image{
    aspect-ratio: auto;
    margin-left: auto;
    margin-right: auto;
}
.p-card-content{
    display: none !important;
}
.p-card-body{
    padding: 0 !important;
}
.p-card-title{
    padding-left: 1em;
    padding-right: 1em;
}
.addPaperBackground{
  background: #fff;
}


</style>