<template>
<div dir="rtl" class="row q-col-gutter-sm q-py-sm">
  <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
      <q-card style="height:100vh" class=" bg-gray-5 q-mr-lg">
      <q-card-section class="q-mt-sm q-mr-sm" >
            <div class="col ">
            <div class="flex items-center"  @click="card = true">
              <div>
             <img src="image2.jpg" style="width:60px;height:60px;border-radius:50%" alt="">
              </div>
              <div>
                <div class="q-mr-sm q-mt-xs ">پوریاوکیلی</div>
                <div class="q-mr-sm q-mt-xs ">
                  <span>
                    <q-icon size="1.2em" name="alarm"/>
                  </span>
                  <span>
                    5خرداد1398
                  </span>
                </div>
              </div>
            </div>
          </div>
          <q-dialog maximized v-model="card">
              <q-card style="max-width:900px;width:900px;height:600px">
              <q-page>
                 <div dir="rtl">                 
                      <q-icon class="cursor-pointer q-mr-sm q-mt-sm"  size="1.8em" v-close-popup name="close"/>
                  <ModalRequirementApplicant/>
                  <hr class="q-mt-lg"/>
                  <TabModalRequirementApplicant/>
                  </div>    
              </q-page>
              
              </q-card>
              
          </q-dialog>
          </q-card-section>
      </q-card>
  </div>
  </div>
</template>
<script>
import {ref,defineAsyncComponent} from "vue"
export default {
  components:{
ModalRequirementApplicant:defineAsyncComponent(()=>import('./ModalApplicant/ModalRequirementApplicant.vue')),
TabModalRequirementApplicant:defineAsyncComponent(()=>import('./ModalApplicant/TabModalRequirementApplicant.vue'))
  },
setup(){
    const card=ref(false)
    return{card}
}
}
</script>
<style>
</style>