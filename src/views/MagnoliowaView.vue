<script setup lang="ts">
import MenuComponent from '../components/MenuComponent.vue'
import {ref} from 'vue'
import Timeline from 'primevue/timeline';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button'
import {useRouter} from 'vue-router'
import BackButton from "@/components/BackButton.vue";

const router = useRouter()
const home = ref({
    // label: 'elo',
    icon: 'pi pi-home',
    to: '/',
});

const items = ref([
    {
        label: "magnoliowa",
        to: "/magnoliowa"
    }
])

const events = ref([
    {data: '1953-1959', to: '/magnoliowa/1953'},
    {data: '1959-1969', to: '/magnoliowa/1959'},
    {data: '1969-1971'},
    {data: '1971-1998'},
    {data: '1998-2014'},
    {data: '2014+'}
]);

</script>




<template>
    <MenuComponent :items="items"/>
    <BackButton to="/"/>

  <main class="flex justify-center align-center pl-28 pr-28" style="min-height: 70vh;">
    <Timeline :value="events" layout="horizontal" align="top">
        <template #marker="slotProps">
        <div class="p-4 marker-bg rounded-full cursor-pointer" v-tooltip="'Zobacz wiecej'" @click="()=>{router.push(slotProps.item?.to)}">
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