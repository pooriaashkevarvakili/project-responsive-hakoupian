<template>
  <q-btn-dropdown icon="fa fa-user" class="text-left " color="primary" :label="$t('userPerson')">
    <div class="col">
      <div class="flex justify-center items-center">
        <div class="q-mt-xs q-ml-xs">
          <img src="image1.jpg" style="width=20px;height:50px" />
        </div>
        <div>
          <div class="q-mr-sm q-mt-xs ">{{ $t("Pooriavakili") }}</div>
          <div class="q-mr-sm q-mt-xs ">{{ $t("PortfolioView") }}</div>
        </div>
      </div>
    </div>
    <hr />
    <q-expansion-item v-for="item in store.hakupianButtonDropdown" :key="item.id" expand-icon="fa fa-chevron-left"
      expand-icon-class="text-blue-4" :icon="item.icon" size="6em" class="iran-sans text-blue-4" :label="item.label">
    </q-expansion-item>

    <q-btn @click="gotoSignUp()" class="full-width bg-red-2">
      <q-icon name="lock"></q-icon>
      <q-item-label class="text-subtitle2 text-red-4 text-right iran-sans">{{
          $t("Signup")
      }}</q-item-label>

    </q-btn>

  </q-btn-dropdown>
</template>
<script setup>
import { useRouter } from "vue-router"
import { onMounted } from "vue";
import { useQuasar } from "quasar";
import { hakupianButtonDropdownCounter } from "stores/HakupianButtonDropdown";
const store = hakupianButtonDropdownCounter();
store.getHakupianButtonDropdown();
const q = useQuasar();
const router = useRouter()
const gotoSignUp = () => {
  router.push('/')
}
onMounted(() => {
  q.iconSet.arrow.dropdown = "";
});
</script>

<style>
</style>
