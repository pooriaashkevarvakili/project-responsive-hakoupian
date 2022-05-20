<template>
  <div class="flex items-center">
    <q-icon size="1.7em" name="mail" />
    <span class="cursor-pointer q-mr-xs text-black" @click="alert = true">
      {{ $t("Inbox") }}
      <q-dialog v-model="alert">
        <q-card style="max-width: 700px; width: 1000px; height: 800px">
          <q-icon size="2em" class="cursor-pointer q-mr-sm q-mt-sm" flat v-close-popup round dense name="close" />

          <q-card-section>
            <div class="flex justify-between">
              <div>{{ $t("Inbox") }}</div>
              <div>{{ $t("Newest") }}</div>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="q-pa-md">
              <div class="row">
                <div dir="rtl" class="col-11">
                  <q-select filled class="input-two" :label="$t('Search')" v-model="model" use-input hide-selected
                    fill-input input-debounce="0" :options="options" @filter="filterFn" :hint="$t('SearchSpecified')"
                    popup-content-class="text-right">
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col-1">
                  <q-icon size="2em" class="q-mt-lg q-mr-lg" name="fa fa-sliders" />
                </div>
              </div>
            </div>
          </q-card-section>

          <CardSectionModal />
        </q-card>
      </q-dialog>
    </span>
  </div>
  <div v-for="item in store.Desk" :key="item.id" class="flex q-mt-lg items-center">
    <q-icon size="1.7em" :name="item.icon" />
    <span class="cursor-pointer q-mr-xs text-black">
      {{ item.title }}
    </span>
  </div>
</template>
<script setup>
import { ref, defineAsyncComponent } from "vue";
import { DeskCounter } from "stores/Desk";
const stringOptions = ["علیرضا", "معین", "مهدی", "مینا", "رضا"];
const CardSectionModal = defineAsyncComponent(() =>
  import("./CardSectionModal.vue")
)
const options = ref(stringOptions);
const store = DeskCounter();
store.getDesks();
const alert = ref(false)
const model = ref(null)
function filterFn(val, update) {
  if (val === "") {
    update(() => {
      options.value = stringOptions;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    options.value = stringOptions.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
}
</script>
<style>
</style>
