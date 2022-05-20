<template>
  <div class="row justify-between q-mt-sm">
    <div class="q-mr-sm text-subtitle2">
      {{ $t("DearUser") }}

      <div class="text-subtitle2">{{ $t("Hakopian360") }}</div>
    </div>
    <div>
      <AddSettings />
    </div>
  </div>

  <CardDashboard />
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const CardDashboard = defineAsyncComponent(
  () => import("components/dashboard/cards/CardDashboard.vue")
)
const AddSettings = defineAsyncComponent(() => import("components/dashboard/AddSettings.vue"))

</script>

<style>
</style>
