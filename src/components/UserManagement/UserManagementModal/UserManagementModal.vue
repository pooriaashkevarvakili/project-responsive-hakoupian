<template>
  <div>
    <q-btn
      icon="fa fa-user-plus"
      class="bg-red-4 q-mr-sm text-white"
      @click="alert = true"
    >
      <span class="q-mr-sm">{{$t('AddNewUser')}}</span>
    </q-btn>
    <q-dialog v-model="alert">
      <q-card style="max-width: 500px; width: 500px; height: 470px">
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
                <div class="col-6">
                  <q-input
                    filled
                    :label="$t('LastName')"
                    v-model="LastName"
                    :hint="$t('SpecifyLastname')"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || $t('SpecifyLastname'),
                      (val) => (val > 0 && val < 100) || $t('NameSpecified'),
                    ]"
                  />
                </div>
                <div class="col-6">
                  <q-input
                    filled
                    class="q-mr-xs"
                    :label="$t('ShowName')"
                    v-model="showName"
                    :hint="$t('SpecifyDisplayname')"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        $t('SpecifyDisplayname'),
                      (val) =>
                        (val > 0 && val < 100) || $t('NameShowSpecified'),
                    ]"
                  />
                </div>
                <div class="col-6">
                  <q-input
                    filled
                    class="q-mt-sm"
                    :label="$t('Email')"
                    v-model="email"
                    :hint="$t('EmailWrite')"
                    lazy-rules
                    :rules="[
                      (val) => (val !== null && val !== '') || $t('EmailWrite'),
                      (val) => (val > 0 && val < 100) || $t('EmailWritten'),
                    ]"
                  />
                </div>
                <div class="col-6">
                  <q-input
                    filled
                    type="number"
                    class="q-mr-xs q-mt-sm"
                    :label="$t('Phone')"
                    v-model="phone"
                    :hint="$t('Writephone')"
                    lazy-rules
                    :rules="[
                      (val) => (val !== null && val !== '') || $t('Writephone'),
                      (val) => (val > 0 && val < 100) || $t('PhoneIdentified'),
                    ]"
                  />
                </div>
                <div class="col-6">
                  <q-input
                    type="password"
                    filled
                    class="q-mt-sm"
                    :label="$t('Password')"
                    v-model="password"
                    :hint="$t('SpecifyPassword')"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || $t('SpecifyPassword'),
                      (val) =>
                        (val > 0 && val < 100) || $t('PasswordSpecified'),
                    ]"
                  />
                </div>
                <div class="col-6">
                  <q-input
                    filled
                    type="password"
                    class="q-mr-xs q-mt-sm"
                    :label="$t('RepeatPassword')"
                    v-model="repeatPassword"
                    :hint="$t('SpecifyRepeatPassword')"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        $t('SpecifyRepeatPassword'),
                      (val) =>
                        (val > 0 && val < 100) || $t('RepeatPasswordSpecified'),
                    ]"
                  />
                </div>
                <div class="col-6">
                  <q-select
                    filled
                    class="q-mt-sm "
                    v-model="title"
                    use-input
                    :label="$t('Title')"
                    hide-selected
                    fill-input
                    :hint="$t('SpecifyTitle')"
                    lazy-rules
                    popup-content-class="text-right"
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || $t('SpecifyTitle'),
                      (val) => (val > 0 && val < 100) || $t('TitleSpecified'),
                    ]"
                    input-debounce="0"
                    :options="titleOPtion"
                    @filter="filterFn"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col-6">
                  <q-select
                    filled
                    class="q-mr-xs q-mt-sm"
                    v-model="status"
                    use-input
                    :label="$t('Status')"
                    hide-selected
                    fill-input
                    :hint="$t('SpecifyStatus')"
                    lazy-rules
                    popup-content-class="text-right"
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || $t('SpecifyStatus'),
                      (val) => (val > 0 && val < 100) || $t('StatusDetermined'),
                    ]"
                    input-debounce="0"
                    :options="StatusOption"
                    @filter="filterFn"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
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
<script src="./UserManagementModal.ts">

</script>

<style></style>
