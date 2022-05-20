<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-6 col-xs-12 col-sm-12">
        <div class="column flex items-center justify-center q-mt-xl">
          <q-icon size="2em" name="fa fa-file" />
          <div class="q-mt-sm">{{ $t('NoInformationApplicant') }}</div>
          <div>
            <AddModalApplicant />
          </div>
        </div>
      </div>
      <div class="col-6">
        <TimeLine />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const TimeLine = defineAsyncComponent(() => import("./TimeLine.vue"))
const AddModalApplicant = defineAsyncComponent(() =>
  import("../AddModalApplicant.vue")
)
</script>

<style>
</style>