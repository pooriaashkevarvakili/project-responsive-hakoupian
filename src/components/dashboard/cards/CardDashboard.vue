<template>
  <div class="row q-col-gutter-sm q-py-sm">
    <div v-for="(item, index) in store.cardDashboard" :key="index" class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
      <q-card>
        <q-card-section class="row">
          <div class="col">
            <div class="flex">
              <div>
                <q-avatar :color="item.color" :class="item.colorIcon" :icon="item.icon"></q-avatar>
              </div>
              <div>
                <div class="q-mr-sm q-mt-xs">{{ item.title }}</div>
                <div class="q-mr-sm q-mt-xs">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <CardDashboardOne />
</template>
<script setup>
import { CardDashboardCounter } from "stores/CardDashboard";
import { defineAsyncComponent } from "vue";
const CardDashboardOne = defineAsyncComponent(() =>
  import("./CardDashboardOne.vue")
)
const store = CardDashboardCounter();
store.getPosts();
</script>

<style>
</style>
