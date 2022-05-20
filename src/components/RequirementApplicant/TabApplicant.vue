<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs v-model="tab" class="text-teal" align="left">
        <q-tab name="mails" :label="$t('AddIndividual')" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <AddIndividual />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script setup>
import { ref, defineAsyncComponent } from "vue";
const AddIndividual = defineAsyncComponent(() => import("./AddIndividual.vue"))
const tab = ref("mails")
</script>
