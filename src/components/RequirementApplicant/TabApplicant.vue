<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
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
<script>
import { ref, defineAsyncComponent } from "vue";
export default {
  components: {
    AddIndividual: defineAsyncComponent(() => import("./AddIndividual.vue")),
  },
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>
