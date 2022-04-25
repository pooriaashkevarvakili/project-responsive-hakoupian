<template>
  <q-btn-dropdown
    icon="close"
    class="q-mr-xs bg-orange-5 text-white"
    :label="$t('RejectTheApplicant')"
  >
    <q-card style="max-width: 300px; width: 300px; height: 525px">
      <q-card-section dir="rtl">
        <span>{{$t('RejectApplicant')}}</span>
        <hr>
        <div class="column">
          <q-checkbox v-model="sabeghe">{{$t('NotExperience')}}</q-checkbox>
          <q-checkbox v-model="houghugh">{{$t('HighSalary')}}</q-checkbox>
          <q-checkbox v-model="danesh">{{$t('Knowledge')}}</q-checkbox>
          <q-checkbox v-model="adam">{{$t('InadequacyStudy')}}</q-checkbox>
          <q-checkbox v-model="entezar">{{$t('BeyondExpectations')}}</q-checkbox>
          <q-checkbox v-model="other">{{$t('OtherReasons')}}</q-checkbox>
        </div>
           <div class="q-pa-md" style="max-width: 500px">
          <q-input
            :label="$t('RejectApplicant')"
            v-model="text"
            filled
            class="input-five cursor-pointer"
            type="textarea"
          />
        </div>
        <q-btn class="full-width q-mt-xs bg-red-5 text-white" :label="$t('RejectTheApplicant')"/>
      </q-card-section>
    </q-card>
  </q-btn-dropdown>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      sabeghe: ref(false),
      houghugh: ref(false),
      danesh: ref(false),
      adam:ref(false),
      entezar:ref(false),
      other:ref(false)
    };
  },
};
</script>

<style>
</style>