<template>
  <div class="q-mr-sm q-mt-sm" dir="rtl">
    {{ $t("UserManagement") }}
  </div>
  <div class="flex q-mt-sm justify-between">
    <div dir="rtl" class="q-mr-sm">
      <q-select
        filled
        v-model="model"
        use-input
        input-debounce="0"
        popup-content-class="text-right"
        :label="$t('Search')"
        :options="options"
        @filter="filterFn"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-select>
    </div>
    <div>
      <UserManagementModal />
    </div>
  </div>
  <div>
    <TableUserManagement />
  </div>
</template>

<script>
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
import { defineAsyncComponent, ref } from "vue";
export default {
  components: {
    UserManagementModal: defineAsyncComponent(() =>
      import("./UserManagementModal/UserManagementModal.vue")
    ),
    TableUserManagement: defineAsyncComponent(() =>
      import("./TableUserManagement.vue")
    ),
  },
  setup() {
    const model = ref(null);
    const options = ref(stringOptions);
    return { options, model };
  },
};
</script>

<style></style>
