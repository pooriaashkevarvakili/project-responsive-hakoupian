<template>
    <q-expansion-item
            icon="people"
            class="text-subtitle2"
            :label="$t('HumanResources')"
          >
            <q-list class="q-pl-lg">
              <q-item
              v-for="items in HumanResources"
              :key="items.id"
                :to="items.to"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon :name="items.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">
                {{items.content}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
</template>
<script>
import {useI18n} from 'vue-i18n'
import {reactive} from 'vue'
export default {
setup() {
    const {t}=useI18n()
    const HumanResources=reactive([
        {
            id:0,
         to:"/applyingRecruitment",
         icon:"fa fa-file",
         content:t('ApplicantRequirement')
        },
     
    ])
    return{t,HumanResources}
}
}
</script>
<style>
</style>