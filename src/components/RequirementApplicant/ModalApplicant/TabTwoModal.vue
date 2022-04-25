<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn class="bg-red-4 text-white" icon="fa fa-plus"   @click="alert = true" >
      <span>{{$t('AddInterview')}}</span>
</q-btn>
    <q-dialog maximized v-model="alert">
      <q-card dir="rtl" style="max-width:1000px;width:1000px;height:350px">
      <q-card-section>
          <q-icon size="1.8em" name="close" v-close-popup/>
          </q-card-section> 
          <q-card-section>
              <TabTwoFormModal/>
              </q-card-section>   
   </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref,defineAsyncComponent } from 'vue'

export default {
    components:{
        TabTwoFormModal:defineAsyncComponent(()=>import('./TabTwoFormModal/TabTwoFormModal.vue'))
    },
  setup () {
    return {
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),

      address: ref('')
    }
  }
}
</script>