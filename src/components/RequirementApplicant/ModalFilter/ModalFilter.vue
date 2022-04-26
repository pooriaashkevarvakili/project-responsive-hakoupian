<template>
  <div class="q-pa-md q-gutter-sm q-mt-xs">
    <q-btn  icon="fa fa-sliders" color="primary" @click="alert = true" >
        <span class="q-mr-sm">{{$t('MoreFilter')}}</span>
    </q-btn>

    <q-dialog v-model="alert">
      <q-card style="max-width: 500px; width: 500px; height: 800px">
       <div >
<q-icon
size="2em"
class="q-mr-sm q-mt-sm cursor-pointer" flat v-close-popup round dense
name="close"
/>
<Education/>
       </div>


      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref,defineAsyncComponent } from "vue";

export default {
  components: {
Education: defineAsyncComponent(() =>import("./Education.vue"))
  },
  setup() {
    return {
      alert: ref(false),
    };
  },
};
</script>
