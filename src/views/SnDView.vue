<script setup lang="ts">
import MenuComponent from '../components/MenuComponent.vue'
import {ref} from 'vue'
import Timeline from 'primevue/timeline';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button'
import {useRouter} from 'vue-router'
import BackButton from "@/components/BackButton.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import globalState from "@/globalState";

const router = useRouter()
const home = ref({
    // label: 'elo',
    icon: 'pi pi-home',
    to: '/',
});

const load = ref(false)

const changeLoad = () => {
  globalState.value.loading = !globalState.value.loading
}

const goToView = (path)=> {
  changeLoad()
  setTimeout(function() {
    router.push(path)
  }, 500);

}

const items = ref([
    {
        label: "Zespół Szkół przy ulicy Długosza",
        to: "/snd"
    }
])

const events = ref([
    {data: '1949-1973', to: '/snd/1949'},
    {data: '1973-1975', to: '/snd/1973'},
    {data: '1975-1985', to: '/snd/1975'},
    {data: '1985-1993', to: '/snd/1985'},
    {data: '1993-2005', to: '/snd/1993'}
]);

</script>




<template>
  <transition>
    <template v-if="globalState.loading">
      <LoadingScreen />
    </template>
  </transition>
    <MenuComponent :items="items"/>
    <BackButton to="/"/>

  <main class="flex justify-center align-center pl-28 pr-28" style="min-height: 70vh;">
    <Timeline :value="events" layout="horizontal" align="top">
        <template #marker="slotProps">
        <div class="p-4 marker-bg rounded-full cursor-pointer hover:animate-pulse" v-tooltip="'Zobacz wiecej'" @click="goToView(slotProps.item?.to)">
            <i class="pi pi-history" style="font-size: 3rem"></i>
        </div>
    </template>
    <template #content="slotProps" >
        <p class="absolute" style="">
        {{ slotProps.item.data }}
        </p>

    </template>
</Timeline>
  </main>
</template>
<style scoped>
.marker-bg{
    background-color:  rgba(1, 105, 165, .5);
}
</style>