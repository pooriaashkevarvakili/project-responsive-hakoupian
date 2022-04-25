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
              <q-list dir="rtl">
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
          <q-expansion-item
            icon="people"
            class="text-subtitle2"
            :label="$t('HumanResources')"
          >
            <q-list class="q-pl-lg">
              <q-item
                to="/applyingRecruitment"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon name="fa fa-file" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    $t("ApplicantRequirement")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg">
              <q-item
                to="/resumearshive"
                active-class="q-item-no-link-highlighting"
              >
                <q-item-section avatar>
                  <q-icon name="fa fa-file-lines" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    $t("ResumeArshive")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item
            icon="fa fa-gear"
            class="text-subtitle2"
            :label="$t('SystemManagement')"
          >
            <q-list class="q-pl-lg"> </q-list>
            <q-list class="q-pl-lg">
              <q-item to="/titles" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="fa fa-file-lines" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    $t("Titles")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/userManagement" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="fa fa-person" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    $t("UserManagement")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          
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
   HakupianButtonDropdown: defineAsyncComponent(() =>import("./HakupianButtonDropdown.vue"))
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

      {
        to: "/mailRoom",
        icon: "fa fa-person-booth",
        name: t("Mailroom"),
      },
    ]);
    return {
      t,item,
      drawerLeft: ref(false),
      drawerRight: ref(false)
    }
  }
}
</script>