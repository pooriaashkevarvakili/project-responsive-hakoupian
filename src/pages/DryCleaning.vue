<template>
  <q-card class="bg-green-4 text-white q-py-lg">


    <div class="flex q-mt-lg justify-between">
      <div class="q-mr-sm text-white text-h6">{{ $t('DryCleaningManagement') }}</div>
      <ModalAddLaundry />
    </div>
  </q-card>
  <TableDryCleaning />
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
const ModalAddLaundry = defineAsyncComponent(() => import('components/DryCleaningManagement/ModalAddLaundry.vue'))
const TableDryCleaning = defineAsyncComponent(() => import('components/DryCleaningManagement/TableDryCleaning.vue'))
</script>
<style>
</style>