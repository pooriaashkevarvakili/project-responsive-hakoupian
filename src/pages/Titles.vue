<template>
  <div dir="rtl" class="q-mr-lg q-mt-sm">
    <span>{{ $t("Titles") }}</span>
  </div>
  <div dir="rtl" class="flex justify-between">
    <div>
      <q-input
        class="input-tweleve q-mr-lg"
        style="max-width: 400px; width: 400px"
        :label="$t('Search')"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div>
      <q-btn class="bg-orange-4 text-white" icon="fa fa-plus"
        >ایجاد عنوان جدید</q-btn
      >
    </div>
  </div>
  <div class="q-pa-xl">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
          <th class="text-right">Sodium (mg)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right">87</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
          <td class="text-right">129</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
          <td class="text-right">337</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
          <td class="text-right">413</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
          <td class="text-right">327</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>