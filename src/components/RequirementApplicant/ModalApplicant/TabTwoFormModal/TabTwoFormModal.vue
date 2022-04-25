<template>
  <q-form @submit="onSubmit">
    <div class="q-pa-md">
      <div class="row">
        <div class="col-6">
          <q-input
            filled
            :hint="$t('SelectDate')"
            v-model="date"
            mask="date"
            :rules="[
              (val) => (val !== null && val !== '') || $t('SelectDate'),
              (val) => (val > 0 && val < 100) || $t('DateSelect'),
            ]"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-select
            filled
            class="q-mr-xs q-mt-sm"
            v-model="typeInterview"
            use-input
            :label="$t('TypeInterview')"
            hide-selected
            fill-input
            :hint="$t('SpecifyInterview')"
            lazy-rules
          
            popup-content-class="text-right"
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyInterview'),
              (val) => (val > 0 && val < 100) || $t('InterviewDetermined'),
            ]"
            input-debounce="0"
            :options="optionstypeInterview"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-6">
          <div class="q-mr-xs">
            <q-input
              :hint="$t('SelectClock')"
              filled
              v-model="time"
              mask="time"
              :rules="[
                (val) => (val !== null && val !== '') || $t('SelectClock'),
                (val) => (val > 0 && val < 100) || $t('ClockSelect'),
              ]"
            >
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="time">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <q-select
            filled
            class="q-mr-xs q-mt-sm"
            v-model="locationInterview"
            use-input
            :label="$t('LocationInterview')"
            hide-selected
            fill-input
            :hint="$t('locationInterview')"
            lazy-rules
           
            popup-content-class="text-right"
            :rules="[
              (val) => (val !== null && val !== '') || $t('locationInterview'),
              (val) => (val > 0 && val < 100) || $t('placeinterviewdetermined'),
            ]"
            input-debounce="0"
            :options="locationInterviews"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
      <div>
        <q-btn
          type="submit"
          class="full-width bg-red-4 text-white q-mt-lg"
          :label="$t('TimeInterview')"
        ></q-btn>
      </div>
    </div>
  </q-form>
</template>
<script src="./TabTwoFormModal.ts"></script>
<style></style>
