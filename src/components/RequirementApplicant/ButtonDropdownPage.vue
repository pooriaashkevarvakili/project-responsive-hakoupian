<template>
  <div>
    <q-btn-dropdown
      menu-anchor="center left"
      icon-right="fa fa-plus"
      id="center"
      class="q-mt-xs circle text-black q-ml-xs"
    >
      <q-card style="max-width: 210px; width: 210px; height: 270px">
        <q-card-section dir="rtl">
          <q-input :label="$t('Search')" class="full-width input-six">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <div
            v-for="item in store.ButtonDropdownPage"
            :key="item.id"
            class="flex items-center q-mt-sm"
          >
            <img
              :src="item.img"
              style="width: 50px; height: 40px; border-radius: 50%"
            />

            <div class="q-mr-sm">{{ item.title }}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { ButtonDropdownPageCounter } from "stores/ButtonDropdownPageButtonDropdownPage";
export default {
  setup() {
   
    const store = ButtonDropdownPageCounter();
    store.GetButtonDropdownPage();
    return {
      store,
    
    };
  },
};
</script>

<style></style>
