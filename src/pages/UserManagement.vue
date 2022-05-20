<template>
  <div>
    <UserManagement />
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
const UserManagement = defineAsyncComponent(() => import('components/UserManagement/UserManagement.vue'))
</script>
<style>
</style>