<template>
  <div class="q-pa-md q-gutter-sm">
    <ModalDeskOne />
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";
const ModalDeskOne = defineAsyncComponent(() => import("./ModalDeskOne.vue"))
</script>

