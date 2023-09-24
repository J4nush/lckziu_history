<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Menubar from 'primevue/menubar';
import Breadcrumb from 'primevue/breadcrumb';
import {ref} from 'vue'

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
        <span class="flex flex-row content-center gap-3">
          <div class="flex content-center">
        <img alt="logo" src="../assets/lckziu_logo.png" class="h-12 inline" />
        </div>
     <Breadcrumb :home="home" :model="items" >
       
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