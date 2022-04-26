<template>
      <q-btn
      icon="fa fa-user-plus"
      class="bg-red-4 q-mr-sm text-white"
      @click="alert = true"
    >
      <span class="q-mr-sm">{{ $t("AddLaundry") }}</span>
    </q-btn>
    <q-dialog v-model="alert">
      <q-card style="max-width: 500px; width: 500px; height: 430px">
        <div >
          <q-icon
            size="2em"
            class="q-mr-sm q-mt-sm cursor-pointer"
            flat
            v-close-popup
            round
            dense
            name="close"
          />
          <q-form dir="rtl" @submit="onSubmit">
            <div class="q-pa-md">
              <div class="row">
              <div class="col-6">
              <q-input filled
                 
            v-model="dryCleaningTitle"
            :label="$t('DryCleaningTitle')"
            :hint="$t('SpecifyLaundry')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyLaundry'),
              (val) => (val > 0 && val < 100) || $t('LaundrySpecified'),
            ]"
              ></q-input>
              </div>
                  <div class="col-6">
                 <q-input filled
                class="q-mr-xs"
            v-model="city"
            :label="$t('CityName')"
            :hint="$t('SpecifyLastname')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyLastname'),
              (val) => (val > 0 && val < 100) || $t('NameSpecified'),
            ]"
                 ></q-input> 
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

    
</template>
<script>
    import {ref} from "vue";
export default {
setup() {
    const dryCleaningTitle=ref(null)
    const city=ref(null)
    return{ city,
        dryCleaningTitle,
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
    }
}
}
</script>

<style>

</style>