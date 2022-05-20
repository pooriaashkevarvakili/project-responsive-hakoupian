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
          <q-checkbox v-model="karshenasiArshad" class="iran-sans">{{ $t('Masters') }}</q-checkbox>
        </div>
      </div>
    </div>
    <hr />
    <AgeModal />
    <MadrakModal />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
const AgeModal = defineAsyncComponent(() => import("./AgeModal.vue"))
const MadrakModal = defineAsyncComponent(() => import("./MadrakModal.vue"))
const diplom = ref(false)
const zirdiplom = ref(false)
const doktra = ref(false)
const kardany = ref(false)
const karshenasi = ref(false)
const karshenasiArshad = ref(false)
</script>
<style>
</style>
