<template>
  <div class="q-pa-md q-gutter-sm">
    <ModalDeskOne />
  </div>
</template>

<script>
import { defineAsyncComponent} from "vue";
export default{
  components: {
    ModalDeskOne: defineAsyncComponent(() =>import("./ModalDeskOne.vue"))
  }
}
</script>

