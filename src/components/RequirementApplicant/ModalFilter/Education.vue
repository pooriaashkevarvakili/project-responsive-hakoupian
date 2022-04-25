<template>
  <div class="q-pa-md">
    <div class="iran-sans q-mr-sm">{{ $t("Segment") }}</div>
    <div class="row">
      <div class="col-8">
        <div class="column">
          <q-checkbox v-model="diplom">{{ $t("Diploma") }}</q-checkbox>
          <q-checkbox v-model="zirdiplom">{{ $t("HighSchool") }}</q-checkbox>
          <q-checkbox v-model="kardany">{{ $t("Resource") }}</q-checkbox>
        </div>
      </div>
      <div class="col-4">
        <div class="column">
          <q-checkbox v-model="karshenasi">{{ $t("Expert") }}</q-checkbox>
          <q-checkbox v-model="doktra">{{ $t("Doctorate") }}</q-checkbox>
          <q-checkbox v-model="karshenasiArshad" class="iran-sans"
            >{{$t('Masters')}}</q-checkbox
          >
        </div>
      </div>
    </div>
    <hr />
    <AgeModal />
    <MadrakModal />
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
export default {
  components: {
    AgeModal: defineAsyncComponent(() => import("./AgeModal.vue")),
    MadrakModal: defineAsyncComponent(() => import("./MadrakModal.vue")),
  },
  setup() {
    return {
      diplom: ref(false),
      zirdiplom: ref(false),
      doktra: ref(false),
      kardany: ref(false),
      karshenasi: ref(false),
      karshenasiArshad: ref(false),
    };
  },
};
</script>

<style></style>
