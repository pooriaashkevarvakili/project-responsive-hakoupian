<template>
  <div class="iran-sans q-mr-sm">{{ $t('Age') }}</div>
  <div class="row">
    <div class="col-8">
      <div class="column">
        <q-checkbox v-model="twenty">{{ $t('LessTwenty') }}</q-checkbox>
        <q-checkbox v-model="threeteen">{{ $t('TwentyThirty') }}</q-checkbox>
      </div>
    </div>
    <div class="col-4">
      <div class="column">
        <q-checkbox v-model="fourteen">{{ $t('ThirtyForty') }}</q-checkbox>
        <q-checkbox v-model="fiveteen">{{ $t('MoreForty') }}</q-checkbox>
      </div>
    </div>
  </div>
  <hr />
</template>
<script setup>
import { ref } from "vue";
const twenty = ref(false)
const threeteen = ref(false)
const fourteen = ref(false)
const fiveteen = ref(false)
</script>

<style>
</style>
