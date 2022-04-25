<template>
  <div class="flex justify-between">
    <div class="column">
      <div>{{$t('ResumeFile')}}</div>
      <div>{{$t('pdf')}}</div>
      <q-uploader accept=".pdf" class="q-uploader-style q-mt-sm" />
    </div>
    <div class="column">
      <div>{{$t('ApplicantImg')}}</div>
      <div>{{$t('jpg')}}</div>
      <q-uploader accept=".jpg" class="q-uploader-style q-mt-sm" />
    </div>
  </div>
  <FormIndividual />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    FormIndividual: defineAsyncComponent(() =>
      import("./FormIndividual/FormIndividual.vue")
    ),
  },
  setup() {},
};
</script>

<style></style>
