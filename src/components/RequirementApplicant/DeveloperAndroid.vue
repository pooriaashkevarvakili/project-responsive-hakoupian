<template>
  <div class="flex q-mt-xl justify-between">
    <div class=" q-mr-sm text-subtitle2">{{ $t('DeveloperAndroid') }}</div>
    <div class="flex">
      <ButtonDropdownPage />
      <img src="image3.jpg" class="q-mt-sm img" />
      <img src="image2.jpg" class="q-mt-sm img-2" />

      <img src="image1.jpg" class="q-mt-sm img-3" />
      <q-toggle v-model="value" color="green" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
const ButtonDropdownPage = defineAsyncComponent(() =>
  import("./ButtonDropdownPage.vue")
)
const value = ref(true)
</script>

<style>
</style>
