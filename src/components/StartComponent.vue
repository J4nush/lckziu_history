<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import { ref } from 'vue'
import MenuComponent from '../components/MenuComponent.vue'
import globalState from "@/globalState";
import LoadingScreen from "@/components/LoadingScreen.vue";
import CircleComponent from "@/components/CircleComponent.vue";

const router = useRouter()
const goToMagnolka = () => {
    router.push({ path: '/magnoliowa' })
}
</script>
<template>

  <transition>
    <template v-if="globalState.loading">
      <LoadingScreen />
    </template>
  </transition>

    <MenuComponent :items="[]"/>
        <main>
            <div class="wrapper flex flex-col gap-2 justify-center w-100 p-4">
                <div class="small_blocks max-h-[25vh] w-[80%] m-auto flex flex-row justify-between w-100 pl-5 pr-5">
                  <CircleComponent :small="true" schoolName="Zespół Szkół przy ulicy Długosza" :image="`src/assets/dlugosza_thumb.jpg`"/>
                  <CircleComponent :small="true" schoolName="Zespół Szkół Pedagogicznych i Technicznych" :image="`src/assets/zdpt_thumb.jpg`"/>
                  <CircleComponent :small="true" schoolName="Zespół Szkół inny gdzieś w LBN" :image="`src/assets/dlugosza_thumb.jpg`"/>
<!--                    <Card class="text-center ">-->
<!--                        <template #header>-->
<!--                            <img alt="user header" class="small_header_image" src="../assets/dlugosza_thumb.jpg" />-->
<!--                        </template>-->
<!--                        <template #title >Zespół Szkół przy ulicy Długosza</template>-->
<!--                        -->
<!--                    </Card>-->
<!--                    <Card class=" text-center">-->
<!--                        <template #header>-->
<!--                            <img alt="user header" class="small_header_image" src="../assets/zdpt_thumb.jpg" />-->
<!--                        </template>-->
<!--                        <template #title> Zespół Szkół Pedagogicznych i Technicznych </template>-->
<!--                        -->
<!--                    </Card>-->
<!--                    <Card class=" text-center">-->
<!--                        <template #header>-->
<!--                            <img alt="user header" class="small_header_image" src="../assets/zdpt_thumb.jpg" />-->
<!--                        </template>-->
<!--                        <template #title>Zespół Szkół jeszcze nie wiadomo jakich</template>-->
<!--                        -->
<!--                    </Card>-->
                </div>
                <Divider/>
                <div class="big_block flex flex-row justify-center w-100 h-[50vh]">
                    <CircleComponent :small="false" :image="`src/assets/lckziu_thumb.jpg`" school-name="Szkoła na ul. Magnoliowej 8" @click="goToMagnolka"/>
<!--                    <Card class="basis-1/2 text-center p-4 cursor-pointer rounded-full" @click="goToMagnolka">-->
<!--                        <template #header>-->
<!--                            <img alt="user header" class="big_header_image" src="../assets/lckziu_thumb.jpg" />-->
<!--                        </template>-->
<!--                        <template #title>Szkoła na ul. Magnoliowej 8</template>-->
<!--                    </Card>-->
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
</style>