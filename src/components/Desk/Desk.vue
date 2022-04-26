<template>
  <div  class="q-col-gutter-sm q-py-sm">
    <div class="row">
      <div class="col-6">
        <q-card style="width: 200px; height: 550px">
          <q-card-section class="q-mr-xs">
            <div class="flex flex-center q-mt-xs">
              <q-btn icon="fa fa-plus" class="bg-orange-4 text-white"
                >{{$t('NewMessage')}}</q-btn
              >
            </div>
          </q-card-section>
          <q-card-section>
            <ModalDesk />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <div
          class="column flex items-center justify-center size-none"
          style="margin-top: 200px"
        >
          <q-icon name="mail" size="4em" />
          <div class="flex items-center justify-center">
           {{$t('SelectDisplay')}}
          </div>
          <div class="flex items-center justify-center">
            {{$t('InboxEmpty')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    ModalDesk: defineAsyncComponent(() => import("./ModalDesk.vue")),
  },
};
</script>

<style>
</style>
