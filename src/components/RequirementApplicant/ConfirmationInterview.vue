<template>
  <q-btn-dropdown
    menu-anchor="bottom end"
    icon="fa fa-check"
    class="bg-green-5 text-white"
    :label="$t('ConfirmationInterview')"
  >
    <q-card dir="rtl" style="max-width: 360px; width: 360px; height: 480px">
      <q-card-section>
        <div>{{$t('FreeInterviews')}}</div>
        <div>{{$t('dayInterview')}}</div>
        <div class="q-gutter-xs row q-mr-sm q-mt-sm">
          <q-date v-model="date" />
        </div>
      </q-card-section>
    </q-card>
  </q-btn-dropdown>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      date: ref("2019/02/01"),
    };
  },
};
</script>

<style>
</style>