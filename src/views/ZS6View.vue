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
        label: "Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6",
        to: "/zs6"
    }
])

const events = ref([
    {data: '1959-2002', to: '/zs6/1959'},
    {data: '1983-2002', to: '/zs6/1983'},
    {data: '2002-2019', to: '/zs6/2002'},
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
    <TimelineComponent :events="events" />
  </main>
</template>
<style scoped>

</style>