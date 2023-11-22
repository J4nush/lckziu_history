<script setup lang="ts">
import { useRouter } from 'vue-router';
import Menubar from 'primevue/menubar';
import Breadcrumb from 'primevue/breadcrumb';
import {ref} from 'vue'
const router = useRouter()
defineProps<{
  items?: Array<JSON>
}>()

const home = ref({
    // label: 'elo',
    icon: 'pi pi-home',
    to: '/',
});

</script>

<template>
<Menubar  class="pl-3 pt-2">
    <template #start>
        <span class="flex flex-row flex-wrap content-center items-center gap-3">
          <div class="">
        <img alt="logo" src="../assets/lckziu_logo.png" class="h-20 inline cursor-pointer" @click="router.push('/')"/>

          </div>
     <Breadcrumb :home="home" :model="items" class="h-fit">
       
        </Breadcrumb>
    </span>
    </template>
    
    </Menubar>

</template>
<style >
.p-menubar .p-menuitem-link{
    overflow: visible !important;
}
</style>