<template>
  <q-form>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-6">
          <q-input
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
        </div>
        <div class="col-6">
          <q-input
            class="q-mr-xs"
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
        </div>
        <div class="col-6">
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
            class="q-mr-xs q-mt-sm"
            v-model="education"
            use-input
            :label="$t('Education')"
            hide-selected
            fill-input
            :hint="$t('SpecifyEducation')"
            lazy-rules
            
            popup-content-class="text-right"
            :rules="[
              (val) => (val !== null && val !== '') || $t('SpecifyEducation'),
              (val) => (val > 0 && val < 100) || $t('EducationDetermined'),
            ]"
            input-debounce="0"
            :options="optionsEducation"
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
    </div>
    <div class="col-12">
      <q-select
        filled
        
        v-model="skills"
        use-input
        :label="$t('Skills')"
        hide-selected
        fill-input
        :hint="$t('IdentifySkills')"
        lazy-rules
       
        popup-content-class="text-right"
        :rules="[
          (val) => (val !== null && val !== '') ||$t('IdentifySkills'),
          (val) => (val > 0 && val < 100) || $t('SkillIdentified'),
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
    </div>
    <div class="col-12">
      <q-input
        class="q-mt-sm"
        filled
        v-model="description"
        :label="$t('Description')"
        :hint="$t('WriteDescription')"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') ||$t('WriteDescription'),
          (val) => (val > 0 && val < 100) || $t('DescriptionWritten'),
        ]"
      />
    </div>
    <div class="justify-start">
      <q-btn
        class="full-width q-mt-lg bg-red-4 text-white"
        type="sumbit"
        :label="$t('AddApplicantInformation')"
      />
    </div>
  </q-form>
</template>

<script src="./FormModalRequirementApplicant">
</script>

<style>
</style>