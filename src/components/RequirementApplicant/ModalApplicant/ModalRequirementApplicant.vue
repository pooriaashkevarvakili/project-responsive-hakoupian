<template>
  <div class="flex justify-between">
    <div>
      <div class="col">
        <div class="flex q-mt-lg q-mr-lg">
          <div>
            <q-avatar size="5em" icon="fa fa-person " color="black" text-color="white" />
          </div>
          <div>
            <div class="q-mr-sm">
              <span>{{ $t("undefined") }}</span>
            </div>
            <div class="q-mr-sm q-mt-xs">
              <span>{{ $t("NewApplicant") }}</span>
              <span class="q-mr-sm">{{ $t("UploadOn") }}</span>
            </div>
            <div class="q-mr-sm q-mt-xs">
              <DropdownRequirementApplicant />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-mt-xl">
      <div class="flex">
        <q-icon name="fa fa-bookmark" />
        <span>{{ $t("AddList") }}</span>
      </div>
      <div class="flex q-mt-sm q-ml-sm">
        <ConfirmationInterview />
        <RejectTheApplicant />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const DropdownRequirementApplicant = defineAsyncComponent(() =>
  import("../ModalRequirementApplicant.vue")
)
const ConfirmationInterview = defineAsyncComponent(() =>
  import("../ConfirmationInterview.vue")
)
const RejectTheApplicant = defineAsyncComponent(() =>
  import("./RejectTheApplicant.vue")
)
</script>
<style>
</style>
