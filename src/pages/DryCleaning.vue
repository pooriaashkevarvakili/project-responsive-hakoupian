<template>
  <div class="flex q-mt-lg justify-between">
 <div class="q-mr-sm">{{$t('DryCleaningManagement')}}</div>
 <ModalAddLaundry/>
  </div>
</template>

<script>
import { defineAsyncComponent} from 'vue'
export default {
components: {
    ModalAddLaundry: defineAsyncComponent(() =>import('components/DryCleaningManagement/ModalAddLaundry.vue'))
}
}
</script>

<style>

</style>