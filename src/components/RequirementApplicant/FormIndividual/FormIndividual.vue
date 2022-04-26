<template>
  <div dir="rtl" class="q-pa-md">
    <q-form  @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col-6">
          <q-select
            filled
            v-model="name"
            use-input
            hide-selected
            fill-input
            :hint="$t('SelectJob')"
            
            :label="$t('WorkTitle')"
            lazy-rules
       popup-content-class="text-right"
            :rules="[
              (val) => (val !== null && val !== '') || $t('SelectJob'),
              (val) => (val > 0 && val < 100) || $t('JobSpecified'),
            ]"
            input-debounce="0"
            :options="options"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input
            class="q-mt-sm"
            filled
            v-model="nameTwo"
            :label="$t('LastName')"
            :hint="$t('SpecifyLastname')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyLastname'),
              (val) => (val > 0 && val < 100) || $t('NameSpecified'),
            ]"
          />
          <q-input
            class="q-mt-sm "
            filled
            v-model="email"
            :label="$t('Email')"
            :hint="$t('EmailWrite')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('EmailWrite'),
              (val) => (val > 0 && val < 100) || $t('EmailWritten'),
            ]"
          />
          <q-input
            class="q-mt-sm"
            filled
            type="number"
            v-model="age"
            :label="$t('Age')"
            :hint="$t('AgeSpecified')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('AgeSpecified'),
              (val) => (val > 0 && val < 100) || $t('AgeDetermined'),
            ]"
          />
        </div>
        <div class="col-6">
          <q-select
            filled
            class="q-mr-lg "
            v-model="resume"
            use-input
            :label="$t('ResumeSource')"
            hide-selected
            fill-input
            :hint="$t('SpecifyResume')"
            lazy-rules
            popup-content-class="text-right"
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyResume'),
              (val) => (val > 0 && val < 100) || $t('ResumeIdentified'),
            ]"
            input-debounce="0"
            :options="nameOne"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input
            class="q-mt-sm q-mr-lg "
            filled
            type="number"
            v-model="phone"
            :label="$t('Phone')"
            :hint="$t('Writephone')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('Writephone'),
              (val) => (val > 0 && val < 100) || $t('PhoneIdentified'),
            ]"
          />
          <q-select
            filled
            v-model="education"
            class="q-mr-lg q-mt-sm "
            use-input
            popup-content-class="text-right"
            :hint="$t('SpecifyEducation')"
            :label="$t('Education')"
            hide-selected
            fill-input
            lazy-rules
           
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyEducation'),
              (val) => (val > 0 && val < 100) || $t('EducationDetermined'),
            ]"
            input-debounce="0"
            :options="educationOptions"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            filled
            v-model="sex"
            class="q-mr-lg q-mt-sm "
            use-input
            hide-selected
            fill-input
            :hint="$t('SpecifyGender')"
            lazy-rules
            :label="$t('Sex')"
           
            popup-content-class="text-right"
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyGender'),
              (val) => (val > 0 && val < 100) || $t('GenderDetermined'),
            ]"
            input-debounce="0"
            :options="jensOne"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-12">
          <q-input
            class="q-mt-sm "
            filled
            v-model="skills"
            :label="$t('Skills')"
            :hint="$t('IdentifySkills')"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || $t('IdentifySkills'),
              (val) => (val > 0 && val < 100) || $t('SkillIdentified'),
            ]"
          />
        </div>
      </div>
      <div>
        <q-btn
          :label="$t('AddApplicantInformation')"
          type="submit"
          class="bg-red-4 text-white full-width"
        />
      </div>
    </q-form>
  </div>
</template>
<script src="./FormIndividual"></script>
