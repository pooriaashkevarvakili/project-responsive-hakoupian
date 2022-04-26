<template>
  <div>
    <q-btn
      icon="fa fa-download "
      class="bg-blue-4 text-white"
      @click="alert = true"
    >
      <span class="q-mr-sm">{{$t('SendResume')}}</span>
    </q-btn>
    <q-dialog v-model="alert">
      <q-card style="max-width: 500px; width: 500px; height: 400px">
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
          <q-form @submit="onSubmit">
            <div class="q-pa-md">
              <div class="row">
                <div  class="col-12">
                  <q-input
                    filled
                    type="number"
                    :label="$t('Score')"
                    v-model="score"
                    :hint="$t('WriteScore')"
                    lazy-rules
                    :rules="[
                      (val) => (val !== null && val !== '') || $t('WriteScore'),
                      (val) => (val > 0 && val < 100) || $t('ScoreDetermined'),
                    ]"
                  />
                </div>
                <div class="col-12">
                  <q-input
                    filled
                    class="q-mt-sm"
                    :label="$t('OpinionApplicant')"
                    v-model="OpinionApplicant"
                    type="textarea"
                    :hint="$t('SpecifyApplicant')"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || $t('SpecifyApplicant'),
                      (val) =>
                        (val > 0 && val < 100) || $t('ApplicantDetermined'),
                    ]"
                  />
                </div>
                <div class="col-12">
                  <q-btn
                    class="full-width q-mt-lg bg-red-4 text-white"
                    type="submit"
                    :label="$t('Registration')"
                  />
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const score = ref(null);
    const OpinionApplicant = ref(null);
    const q = useQuasar();
    return {
      score,
      OpinionApplicant,
      alert: ref(false),
      onSubmit() {
        if (accept.value !== true) {
          q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
    };
  },
};
</script>
<style></style>
