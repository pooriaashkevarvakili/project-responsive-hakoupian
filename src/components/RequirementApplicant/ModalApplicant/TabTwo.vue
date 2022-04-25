<template>
 
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-6 col-xs-12 col-sm-12">
        <div class="column flex q-mt-xl q-mr-xl items-center">
          <q-icon size="3em" name="fa fa-file-lines" />
          <span class="q-mt-sm">{{$t('Informationapplicant')}}</span>
       <TabTwoModal/>
        </div>
      </div>
      <div class="col-6">
        <div class="">
   <TimeLine/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue-demi';
export default {
  components:{
    TimeLine:defineAsyncComponent(()=>import('./TimeLine.vue')),
    TabTwoModal:defineAsyncComponent(()=>import('./TabTwoModal.vue'))
  },
setup(){

}
};
</script>

<style>
</style>