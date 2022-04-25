
<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        v-model="model"
        use-input
        input-debounce="0"
          popup-content-class="text-right"
        class="  input-three"
        :label="$t('Search')"
        :options="options"
        @filter="filterFn"
        
      >
        <template v-slot:prepend>
            <q-icon name="search"/>
        </template>
      </q-select>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
  setup () {
    const options = ref(stringOptions)

    return {
      model: ref(null),
      options,

      filterFn (val, update) {
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
    }
  }
}
</script>