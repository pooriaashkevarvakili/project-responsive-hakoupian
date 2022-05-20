<template>
  <q-card class="bg-green-5 text-white">
    <div class=" q-py-lg flex justify-center text-h6">مدیریت محتوا</div>
  </q-card>
  <div class="flex column items-center q-mt-lg">
    <div>{{ $t('ImageLogin') }}</div>
    <div>{{ $t('UploadResumePdf') }}</div>
    <q-btn icon="fa fa-upload" style="width:150px" class="q-mt-lg q-mr-sm bg-red-4 text-white"
      @click="myFilePdf.click()">
      <span class="q-mr-sm">{{ $t('UploadFile') }}</span>
      <input accept=".pdf" type="file" v-show="ok" ref="myFilePdf" />
    </q-btn>
  </div>
  <div class="flex column items-center q-mt-lg">
    <div>{{ $t('LogoFile') }}</div>
    <div>{{ $t('phototakenformat') }}</div>
    <q-btn icon="fa fa-upload" style="width:150px" @click="myFile.click()" class="q-mt-lg bg-red-4 text-white">
      <span class="q-mr-sm">{{ $t('UploadImage') }}</span>
      <input accept="image/*" type="file" v-show="ok" ref="myFile" />

    </q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const myFile = ref()
const myFilePdf = ref()
</script>

<style>
</style>