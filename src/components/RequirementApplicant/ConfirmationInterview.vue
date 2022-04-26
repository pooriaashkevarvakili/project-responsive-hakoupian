<template>
  <div>
    <div>
      <q-btn
        icon="fa fa-check"
        class="bg-green-5 text-white"
        @click="alert = true"
      >
        <span class="q-mr-sm">{{ $t("ConfirmationInterview") }}</span>
      </q-btn>
      <q-dialog v-model="alert">
        <q-card style="max-width: 500px; width: 500px; height: 500px">
          <div dir="rtl">
            <q-icon
              size="2em"
              class="q-mr-sm q-mt-sm cursor-pointer"
              flat
              v-close-popup
              round
              dense
              name="close"
            />
            <div class="flex justify-center">{{ $t("FreeInterviews") }}</div>
            <div class="flex justify-center">{{ $t("dayInterview") }}</div>
            <div class="flex justify-center q-mt-sm">
              <q-date v-model="date" />
            </div>
          </div>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      alert: ref(false),
      date: ref("2019/02/01"),
    };
  },
};
</script>

<style></style>
