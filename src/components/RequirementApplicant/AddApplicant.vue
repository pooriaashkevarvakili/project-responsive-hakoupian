<template>
  <div  class="q-pa-md q-gutter-sm">
    <q-btn size=".9em" icon="fa-solid fa-user-plus" color="primary" @click="alert = true" >
    <span class="q-mr-sm">
{{$t('AddApplicant')}}
    </span>
    </q-btn>

    <q-dialog maximized v-model="alert">
        <div dir="rtl">
      <q-card style="max-width: 800px; width: 1000px; height: 800px">
  <q-btn  icon="close" class="q-mr-sm q-mt-sm" v-close-popup flat dense/>
<TabApplicant/>
      </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref,defineAsyncComponent } from 'vue'

export default {
    components: {
        TabApplicant: defineAsyncComponent(()=>import("./TabApplicant.vue"))
    },
  setup () {
    return {
      alert: ref(false),
     tab: ref('mails')
    }
  }
}
</script>
