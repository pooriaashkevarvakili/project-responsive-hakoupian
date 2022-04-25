<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      icon="fa fa-plus"
      class="iran-san q-pr-xs q-py-sm"
      color="red-4"
      @click="layout = true"
    >
      <span class="q-mr-xs iran-sans">{{ $t("SettingsAdd") }}</span>
    </q-btn>
    <q-dialog v-model="layout">
      <q-card style="max-width: 800px; width: 1000px; height: 800px">
        <q-layout dir="rtl" view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>{{ $t("SettingsAdd") }}</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" />
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <div class="flex justify-around">
                <div>
                  <div
                    v-for="item in store.AddSettings"
                    :key="item.id"
                    class="col"
                  >
                    <div class="flex q-mt-lg">
                      <div>
                        <q-avatar
                          size="7em"
                          class="q-mr-sm"
                          color="blue-1"
                          :icon="item.icon"
                        ></q-avatar>
                      </div>
                      <div class="flex-1">
                        <div class="q-mr-sm q-mt-lg">
                          {{ item.title }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    v-for="item in storeOne.AddSettingsOne"
                    :key="item.id"
                    class="flex q-mt-lg q-ml-xl"
                  >
                    <div>
                      <q-avatar
                        size="7em"
                        class="q-mr-sm"
                        color="blue-1"
                        :icon="item.icon"
                      ></q-avatar>
                    </div>

                    <div class="q-mt-lg">
                      <span>{{ item.title }} </span>
                    </div>
                  </div>
                </div>
              </div>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from "vue";
import { AddSettingsCounter } from "stores/AddSettings";
import { AddSettingsOneCounter } from "stores/AddSettingsOne";
export default {
  setup() {
    const moreContent = ref(true);
    
    const store = AddSettingsCounter();
    store.getAddSettings();
    const storeOne = AddSettingsOneCounter();
    storeOne.getAddSettingsOne();
    return {
      layout: ref(false),
      store,
   
      moreContent,

      storeOne,
    };
  },
};
</script>
