<template>
  <div class="q-px-xl q-mt-xl">
        <q-markup-table>
      <thead>
        <tr>
          <th class="text-right">{{$t('CityName')}}</th>
          <th class="text-right">{{$t('TitleDryCleaing')}}</th>
          <th class="text-right">{{$t('TitleAddress')}}</th>
          <th class="text-right">{{$t('Address')}}</th>
          <th class="text-right">{{$t('Status')}}</th>
          <th class="text-right">
              {{$t('Action')}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-right">تهران</td>
          <td class="text-right">خشک شویی ارغوان</td>
          <td class="text-right">پوریا</td>
          <td class="text-right">{{$t('Resource')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right">
              <q-icon name="fa-solid fa-ellipsis"/>
          </td>
        </tr>
        <tr>
          <td class="text-right">اراک</td>
          <td class="text-right">خشک شویی اطلس</td>
          <td class="text-right">حسین</td>
          <td class="text-right">{{$t('Expert')}}</td>
          <td class="text-right">{{$t('Passive')}}</td>
          <td class="text-right">  <q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
        <tr>
          <td class="text-right">اصفهان</td>
          <td class="text-right">خشک شویی شیان</td>
          <td class="text-right">ابرهیم</td>
          <td class="text-right">{{$t('Assistance')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
        <tr>
          <td class="text-right">بابل</td>
          <td class="text-right">خشک شویی زاندارک</td>
          <td class="text-right">علی</td>
          <td class="text-right">{{$t('Expert')}}</td>
          <td class="text-right">{{$t('Passive')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
        <tr>
          <td class="text-right">بندرعباس</td>
          <td class="text-right">خشک شویی آتا</td>
          <td class="text-right">سروش</td>
          <td class="text-right">{{$t('Assistance')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
         <tr>
          <td class="text-right">رشت</td>
          <td class="text-right">خشک شویی نگین شرق</td>
          <td class="text-right">سروش</td>
          <td class="text-right">{{$t('Assistance')}}</td>
          <td class="text-right">{{$t('Active')}}</td>
          <td class="text-right"><q-icon name="fa-solid fa-ellipsis"/></td>
        </tr>
         <tr>
          <td class="text-right">ساری</td>
          <td class="text-right">خشک شویی لیبا</td>
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