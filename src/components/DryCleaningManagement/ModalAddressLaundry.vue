<template>
  <div class="flex q-mt-lg column items-center">
    <q-icon size="2em" name="fa fa-file-lines" />
    <div class="q-mt-sm">{{ $t("AddressRegistered") }}</div>
    <div class="cursor-pointer q-mt-sm q-px-sm q-py-sm text-white bg-orange-4">
      <span @click="alert = true">
        <q-icon name="fa fa-plus" />
        {{ $t("AddNewAddress") }}
      </span>
    </div>
  </div>
  <q-dialog v-model="alert">
    <q-card style="max-width: 700px; width: 700px; height: 500px">
      <q-card-section>
        <q-icon name="close" size="1.8em" v-close-popup />
        <q-form dir="rtl" @submit="onSubmit" v-model="form">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-6">
                <q-input
                  filled
                  class="q-mr-xs"
                  v-model="addressTitle"
                  :label="$t('AddressTitle')"
                  :hint="$t('SpecifyAddress')"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || $t('SpecifyAddress'),
                    (val) => (val > 0 && val < 100) || $t('AddressSpecified'),
                  ]"
                ></q-input>
              </div>
              <div class="col-6">
                <q-input
                  filled
                  type="number"
                  class="q-mr-xs"
                  v-model="phone"
                  :label="$t('Phone')"
                  :hint="$t('Writephone')"
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || $t('Writephone'),
                    (val) => (val > 0 && val < 100) || $t('PhoneIdentified'),
                  ]"
                ></q-input>
              </div>
              <div class="col-12">
                <q-input
                  filled
                  class="q-mt-sm"
                  v-model="address"
                  type="textarea"
                  :label="$t('Address')"
                  :hint="$t('SpecifyAddress')"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || $t('SpecifyAddress'),
                    (val) => (val > 0 && val < 100) || $t('AddressSpecified'),
                  ]"
                ></q-input>
              </div>
              <div class="col-6 q-mt-sm">
                     <q-input
                  filled
                  type="number"
                  class="q-mr-xs"
                  v-model="phoneOne"
                  :label="$t('PhoneOne')"
                  :hint="$t('SpecifyFirstPhone')"
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || $t('SpecifyFirstPhone'),
                    (val) => (val > 0 && val < 100) || $t('FirstphoneIdentified'),
                  ]"
                ></q-input>
              </div>
              <div class="col-6 q-mt-sm">
                     <q-input
                  filled
                  type="number"
                  class="q-mr-xs"
                  v-model="phoneTwo"
                  :label="$t('PhoneTwo')"
                  :hint="$t('SpecifyTwoPhone')"
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || $t('SpecifyTwoPhone'),
                    (val) => (val > 0 && val < 100) || $t('TwophoneIdentified'),
                  ]"
                ></q-input>
              </div>
            </div>
          </div>
          <q-btn class="full-width bg-orange-4 text-white q-mt-lg">{{$t('AddNewLaundry')}}</q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const phone = ref(null);
    const address = ref(null);
    const phoneOne=ref(null);
    const addressTitle = ref(null);
    const phoneTwo= ref(null);
    return {
      phone,
      phoneOne,
      phoneTwo,
      address,
      addressTitle,
      alert: ref(false),
      onSubmit() {
        if (form.value !== true) {
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
