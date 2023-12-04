<script setup lang="ts">
import Button from 'primevue/button'
import {useRouter} from 'vue-router'

const router = useRouter()

defineProps<{
  to?: String
}>()
</script>

<template>
  <div class="p-3 noselect">
    <Button label="Powrót" icon="pi pi-arrow-circle-left" severity="danger" size="small"  @click="() => { to?.length ? router.push(to) : router.go(-1)}"/>
  </div>
</template>

<style scoped>

</style>