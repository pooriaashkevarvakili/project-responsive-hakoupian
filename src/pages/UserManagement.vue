<template>
  <div>
     <UserManagement/> 
  </div>
</template>

<script>
import { defineAsyncComponent} from 'vue'
export default {
components: {
    UserManagement: defineAsyncComponent(() =>import('components/UserManagement/UserManagement.vue'))
}
}
</script>

<style>

</style>