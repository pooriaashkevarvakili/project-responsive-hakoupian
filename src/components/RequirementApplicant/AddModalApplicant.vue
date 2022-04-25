<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn icon="fa fa-plus" class="bg-red-4 text-white" @click="alert = true">
      <span>{{ $t("AddApplicantInformation") }}</span></q-btn
    >
    <q-dialog maximized v-model="alert">
      <q-card dir="rtl" style="max-width: 1000px; width: 1000px; height: 480px">
        <q-btn flat icon="close" color="primary" v-close-popup />

        <q-card-section>
          <FormModalRequirementApplicant />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

export default {
  setup() {
    return {
      alert: ref(false),
    };
  },
  components: {
    ModalRequirementApplicant: defineAsyncComponent(() =>
      import("./ModalApplicant/ModalRequirementApplicant.vue")
    ),
    FormModalRequirementApplicant:defineAsyncComponent(()=>
    import('./FormModalRequirementApplicant/FormModalRequirementApplicant.vue')
    ),
  },
};
</script>