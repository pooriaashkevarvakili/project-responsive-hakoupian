<template>
  <div>
    <DeveloperAndroid />
    <div class=" q-mr-sm">
      <q-icon size="1.8em" name="fa fa-building" />
      <span class="text-subtitle2">{{ $t('Fany') }}</span>
    </div>

    <div class="flex justify-between">
      <div class="flex">
        <SearchApplicant />

        <ModalFilter />
      </div>


      <div>
        <AddApplicant />
      </div>
    </div>
  </div>
  <Tables />
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const DeveloperAndroid = defineAsyncComponent(() =>
  import("components/RequirementApplicant/DeveloperAndroid.vue")
)
const Tables = defineAsyncComponent(() => import('components/RequirementApplicant/Tables.vue'))
const SearchApplicant = defineAsyncComponent(() => import("components/RequirementApplicant/SearchApplicant.vue"))
const ModalFilter = defineAsyncComponent(() => import('src/components/RequirementApplicant/ModalFilter/ModalFilter.vue'))
const AddApplicant = defineAsyncComponent(() => import('components/RequirementApplicant/AddApplicant.vue'))
const value = ref(true)
</script>

<style>
</style>
