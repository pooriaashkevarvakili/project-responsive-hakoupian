<template>
  <q-card-section>
    <div class="flex items-center justify-center">
      <img
        src="image1.jpg"
        style="width:60px;height:60px;border-radius:50%,overflow:hidden"
      />
      <div class="flex-1">
        <div class="q-mr-xs">علیرضاتهرانی</div>
        <div class="q-mr-xs">{{$t('Salaryincrease')}}</div>
        <div class="q-mr-xs">{{$t('Summoningyou')}}</div>
      </div>
      <div class="q-mr-xs">13:58</div>
    </div>
    <div
      v-for="item in store.CardSectionModal"
      :key="item.id"
      class="flex q-mt-lg items-center justify-center"
    >
      <img
        :src="item.img"
        style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden"
      />
      <div class="flex-1">
        <div class="q-mr-xs">{{ item.title }}</div>
        <div class="q-mr-xs">{{$t('Salaryincrease')}}</div>
        <div class="q-mr-xs">{{item.content}}</div>
      </div>
      <div class="q-mr-xs">{{ item.date }}</div>
    </div>
  </q-card-section>
</template>
<script>
import { CardSectionModalCounter } from "stores/CardSectionModal";
export default {
  setup() {
    
    const store = CardSectionModalCounter();
    store.GetCardSectionModal();
    return {
      store,
      
    };
  },
};
</script>
<style></style>
