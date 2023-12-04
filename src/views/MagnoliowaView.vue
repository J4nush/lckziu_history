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
import TimelineComponent from "@/components/TimelineComponent.vue";
import Dialog from "primevue/dialog";


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



const items = ref([
    {
        label: "Szkoła na ul. Magnoliowej 8",
        to: "/magnoliowa"
    }
])

const events = ref([
    {data: '1953-1959', to: '/magnoliowa/1953'},
    {data: '1959-1969', to: '/magnoliowa/1959'},
    {data: '1969-1971', to: '/magnoliowa/1969'},
    {data: '1971-1998', to: '/magnoliowa/1971'},
    {data: '1998-2014', to: '/magnoliowa/1998'},
    {data: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2014+', to: '/magnoliowa/2014'}
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

  <main class="flex justify-center align-center pl-28 pr-28 min-h-[70vh] xl:min-h-[70vh] noselect">
    <TimelineComponent :events="events" />
  </main>
</template>
<style scoped>

</style>