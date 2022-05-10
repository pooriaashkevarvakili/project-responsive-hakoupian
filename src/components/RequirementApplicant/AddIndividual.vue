<template>
  <div class="flex justify-between">
    <div class="column">
      <div>{{$t('ResumeFile')}}</div>
      <div>{{$t('pdf')}}</div>
      <q-btn icon="fa fa-upload" style="width:150px" class="q-mt-lg q-mr-sm bg-red-4 text-white" @click="myFilePdf.click()" >
        <span class="q-mr-sm">{{$t('UploadFile')}}</span>
        <input accept=".pdf"  type="file" v-show="ok" ref="myFilePdf"/>
      </q-btn>
    </div>
    <div class="column">
      <div>{{$t('ApplicantImg')}}</div>
      <div>{{$t('jpg')}}</div>
      <q-btn icon="fa fa-upload" style="width:150px" @click="myFile.click()" class="q-mt-lg bg-red-4 text-white" >
        <span class="q-mr-sm">{{$t('UploadImage')}}</span>
                <input accept="image/*" type="file" v-show="ok" ref="myFile"/>

      </q-btn>
    </div>
  </div>
  <FormIndividual />
</template>

<script>
import { defineAsyncComponent,ref } from "vue";

export default {
  components: {
    FormIndividual: defineAsyncComponent(() =>
      import("./FormIndividual/FormIndividual.vue")
    ),
  },
  setup() {
    const myFile=ref()
    const myFilePdf=ref()
    return{
      myFile,myFilePdf
    }
  },
};
</script>

<style></style>
