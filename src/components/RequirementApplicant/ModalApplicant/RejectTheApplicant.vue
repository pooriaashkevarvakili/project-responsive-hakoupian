<template>
  <div>
    <q-btn
      icon="fa fa-close"
      class="bg-orange-4 q-mr-sm text-white"
      @click="alert = true"
    >
      <span class="q-mr-sm">{{ $t("RejectApplicant") }}</span>
    </q-btn>
    <q-dialog v-model="alert">
      <q-card style="max-width: 500px; width: 500px; height: 430px">
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
                <div class="col-7">
                  <q-checkbox v-model="sabeghe">{{
                    $t("NotExperience")
                  }}</q-checkbox>
                </div>
                <div class="col-5">
                  <q-checkbox v-model="houghugh">{{
                    $t("HighSalary")
                  }}</q-checkbox>
                </div>
                <div class="col-7">
                  <q-checkbox v-model="danesh">{{
                    $t("Knowledge")
                  }}</q-checkbox>
                </div>
                <div class="col-5">
                  <q-checkbox v-model="adam">{{
                    $t("InadequacyStudy")
                  }}</q-checkbox>
                </div>
                <div class="col-7">
                  <q-checkbox v-model="entezar">{{
                    $t("BeyondExpectations")
                  }}</q-checkbox>
                </div>
                <div class="col-5">
                  <q-checkbox v-model="other">{{
                    $t("OtherReasons")
                  }}</q-checkbox>
                </div>
                <div class="col-12">
                  <q-input
                    :label="$t('RejectApplicant')"
                    v-model="applicant"
                    filled
                    :hint="$t('SpecifyApplicant')"
                    lazy-rules
                    :rules="[
                      (val) => (val !== null && val !== '') || $t('SpecifyApplicant'),
                      (val) => (val > 0 && val < 100) || $t('ApplicantDetermined'),
                    ]"
                    class="q-mt-sm cursor-pointer"
                    type="textarea"
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
export default {
  setup() {
    const applicant=ref(null)
    return {
      applicant,
      alert: ref(false),
      sabeghe: ref(false),
      houghugh: ref(false),
      danesh: ref(false),
      adam: ref(false),
      entezar: ref(false),
      other: ref(false),
    };
  },
};
</script>

<style></style>
