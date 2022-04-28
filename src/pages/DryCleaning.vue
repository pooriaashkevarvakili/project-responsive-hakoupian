<template>
<q-card class="bg-green-4 text-white q-py-lg">


  <div class="flex q-mt-lg justify-between">
 <div class="q-mr-sm text-white text-h6">{{$t('DryCleaningManagement')}}</div>
 <ModalAddLaundry/>
  </div>
  </q-card>
  <TableDryCleaning/>
</template>

<script>
import { defineAsyncComponent} from 'vue'
export default {
components: {
    ModalAddLaundry: defineAsyncComponent(() =>import('components/DryCleaningManagement/ModalAddLaundry.vue')),
    TableDryCleaning:defineAsyncComponent(()=>import('components/DryCleaningManagement/TableDryCleaning.vue'))
}
}
</script>

<style>

</style>