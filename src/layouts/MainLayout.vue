<template>
  <div  >
    <q-layout view="hHh Lpr lff"   class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar dir="rtl">
                    <q-fab flat @click="drawerRight = !drawerRight" round dense icon="menu" />
             <q-toolbar-title>{{$t('Hakoupian')}}</q-toolbar-title>
             <HakupianButtonDropdown />
        </q-toolbar>
      </q-header>
      <q-drawer
        side="right"
        class="bg-primary text-white"
        v-model="drawerRight"
        bordered
        :width="250"
        :breakpoint="500"
        >
              <q-list >
          <q-item
            v-for="(items, index) in item"
            :key="index"
            :to="items.to"
            active-class="q-item-no-link-highlighting"
          >
            <q-item-section avatar>
              <q-icon :name="items.icon" />
            </q-item-section>
            <q-item-label header class="text-white iran-sans text-subtitle2">
              {{ items.name }}
            </q-item-label>
          </q-item>
        <HumanResources/>
       <SystemManagement/>
        </q-list>
      </q-drawer>
      <q-page-container>
        <q-page >
          <router-view/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import {  ref, reactive, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";
export default {
  components:{
    HumanResources:defineAsyncComponent(() =>import('./HumanResources.vue')),
   HakupianButtonDropdown: defineAsyncComponent(() =>import("./HakupianButtonDropdown.vue")),
   SystemManagement:defineAsyncComponent(() =>import('./SystemManagement.vue'))
  },
  setup () {
        const { t } = useI18n();
    const item = reactive([
      {
        icon: "home",
        name: t("Dashboard"),
        to: "/dashboard",
      },
      {
        icon: "folder",
        name: t("Desk"),
        to: "/desk",
      },

    
    ]);
    return {
      t,item,
      drawerRight: ref(false)
    }
  }
}
</script>