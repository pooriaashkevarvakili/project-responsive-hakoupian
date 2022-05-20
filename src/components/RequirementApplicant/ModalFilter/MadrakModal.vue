<template>
  <div class="iran-sans q-mr-sm">{{ $t('Skills') }}</div>
  <div class="row">
    <div class="col-8">
      <div class="column">
        <q-checkbox class="iran-sans" v-model="office">{{ $t('Office') }}</q-checkbox>
        <q-checkbox class="iran-sans" v-model="network">{{ $t('Network') }}</q-checkbox>
      </div>
    </div>
    <div class="col-4">
      <div class="column">
        <q-checkbox v-model="system">{{ $t('SystemPartners') }}</q-checkbox>
        <q-checkbox v-model="work">{{ $t('TeamWork') }}</q-checkbox>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const office = ref(false)
const network = ref(false)
const system = ref(false)
const work = ref(false)
</script>
<style>
</style>
