<template>
  <div dir="rtl" class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
    <q-card>
      <q-card-section>{{ $t("LatestNotifications") }}</q-card-section>
      <q-card-section v-for="item in store.Latestnotifications" :key="item.id">
        <div :key="item.id" class="flex">
          <q-avatar
            :class="item.colorIcon"
            :color="item.color"
            :icon="item.icon"
          ></q-avatar>
          <div class="flex-1">
            <div class="q-mr-xs">{{ item.title }}</div>
            <div class="q-mr-xs">{{ item.content }}</div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn
          icon="fa fa-chevron-right"
          class="full-width iran-sans text-white bg-blue-4"
          >{{ $t("SeeAll") }}</q-btn
        >
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { LatestnotificationsCounter } from "stores/Latestnotifications";
export default {
  setup() {
    const store = LatestnotificationsCounter();
    store.getlatestnotifications();

   
    return {
      store,
      
    };
  },
};
</script>

<style></style>
