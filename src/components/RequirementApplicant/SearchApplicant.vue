
<template>
  <div class="q-pa-md">
    <div dir="rtl" class="q-gutter-md row">
      <q-select filled v-model="model" use-input input-debounce="0" popup-content-class="text-right"
        :label="$t('Search')" :options="options" @filter="filterFn">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-select>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
const options = ref(stringOptions)
const model = ref(null)
function filterFn(val, update) {
  if (val === '') {
    update(() => {
      options.value = stringOptions

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    })
    return
  }
  update(() => {
    const needle = val.toLowerCase()
    options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}
</script>