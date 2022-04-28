<template>
<div class="q-pa-xl">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-right">{{$t('LastName')}}</th>
          <th class="text-right">{{$t('Phone')}}</th>
          <th class="text-right">{{$t('ShowName')}}</th>
          <th class="text-right">{{$t('Title')}}</th>
          <th class="text-right">{{$t('Status')}}</th>
          <th class="text-right">{{$t('Action')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-right">پوریاوکیلی</td>
          <td class="text-right">09376720694</td>
          <td class="text-right">پوریا</td>
          <td class="text-right">{{$t('Resource')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right">
              <q-icon name="fa-solid fa-ellipsis"/>
          </td>
        </tr>
        <tr>
          <td class="text-right">حسین صادقی</td>
          <td class="text-right">09355754341</td>
          <td class="text-right">حسین</td>
          <td class="text-right">{{$t('Expert')}}</td>
          <td class="text-right">{{$t('Passive')}}</td>
          <td class="text-right">  <q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
        <tr>
          <td class="text-right">ابراهیم صادقی</td>
          <td class="text-right">09362142114</td>
          <td class="text-right">ابرهیم</td>
          <td class="text-right">{{$t('Assistance')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
        <tr>
          <td class="text-right">علی شهربازی</td>
          <td class="text-right">09395427221</td>
          <td class="text-right">علی</td>
          <td class="text-right">{{$t('Expert')}}</td>
          <td class="text-right">{{$t('Passive')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
        <tr>
          <td class="text-right">سروش طاقت</td>
          <td class="text-right">09378975632</td>
          <td class="text-right">سروش</td>
          <td class="text-right">{{$t('Assistance')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>