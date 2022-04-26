<template>
  <div class="q-mr-sm q-mt-sm" dir="rtl">
   {{$t('UserManagement')}}
  </div>
  <div  class="flex q-mt-sm justify-between">
      <div dir="rtl" class="q-mr-sm">
          <q-input filled :label="$t('Search')"/>
      </div>
      <div>
     <UserManagementModal/>
      </div>
  </div>
  <div>
    <TableUserManagement/>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
export default {
  components: {
    UserManagementModal: defineAsyncComponent(() =>import("./UserManagementModal/UserManagementModal.vue")),
    TableUserManagement:defineAsyncComponent(() =>import("./TableUserManagement.vue"))
  },
setup() {

}
}
</script>

<style>

</style>