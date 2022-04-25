<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-tabs v-model="tab" class="text-teal" align="left">
        <q-tab name="mails" :label="$t('ApplicantInformation')" />
        <q-tab name="alarms" :label="$t('Interview')" />
        <q-tab name="Assessment" :label="$t('Assessment')"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <TabOne />
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <TabTwo />
        </q-tab-panel>
        <q-tab-panel name="Assessment">
          <TabThree/>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import { ref, defineAsyncComponent } from "vue";

export default {
  components: {
    TabOne: defineAsyncComponent(() => import("./TabOne.vue")),
    TabTwo:defineAsyncComponent(()=>import('./TabTwo.vue')),
    TabThree:defineAsyncComponent(() => import('./TabThree.vue'))
  },
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>