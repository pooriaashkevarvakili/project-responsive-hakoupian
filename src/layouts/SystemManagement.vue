<template>
  <q-expansion-item
   
    icon="fa fa-gear"
    :label="$t('SystemManagement')"
  >
    <q-list class="q-pl-lg">
      <q-item v-for="items in SystemManagement" :key="items.id" :to="items.to" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
         <q-icon :name="items.icon"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label class="iran-sans"> {{items.lable}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script >
import {useI18n} from 'vue-i18n'
import {reactive} from "vue";
export default {
  name: "SystemManagement",
  setup(){
    const {t}=useI18n()
    const SystemManagement=reactive([
      {
        id:1,
        to:'/titles',
        lable:t('Titles'),
        icon:'fa fa-file-lines'
      },
      {
        id:2,
        to:'/userManagement',
        lable:t('UserManagement'),
        icon:'fa fa-user'
      },
       {
        id:3,
        to:'/dryCleaning',
        lable:t('DryCleaningManagement'),
        icon:'fa fa-car'
      },
          {
        id:4,
        to:'/contentManagement',
        lable:t('ContentManagement'),
        icon:'fa fa-file-lines'
      },
    ])
    return{
      SystemManagement,t
    }
  }
}
</script>

<style scoped>
</style>