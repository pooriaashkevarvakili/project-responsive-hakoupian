<template>
  <div  class="row justify-between q-mt-sm">
    <div class="q-mr-sm text-subtitle2">
      {{ $t("DearUser") }}

      <div class="text-subtitle2">{{ $t("Hakopian360") }}</div>
    </div>
    <div><AddSettings /></div>
  </div>

  <CardDashboard />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  components: {
    CardDashboard: defineAsyncComponent(
      () => import("components/dashboard/cards/CardDashboard.vue")
    ),
    AddSettings: defineAsyncComponent(() => import("components/dashboard/AddSettings.vue")),
  },
  setup() {},
});
</script>

<style></style>
