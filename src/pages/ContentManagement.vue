<template>
<q-card class="bg-green-5 text-white">
  <div class=" q-py-lg flex justify-center text-h6">مدیریت محتوا</div>
  </q-card>
  <div class="flex column items-center q-mt-lg">
    <div>تصویر صفحه ورود</div>
    <div>رزومه متقاضی با فرمت pdf اپلود نمایید</div>
    <q-uploader class="q-mt-sm" label="اپلود رزومه" accept=".pdf"/>
  </div>
  <div class="flex column items-center q-mt-lg">
    <div>فایل لوگو</div>
    <div>عکس متقاضی با فرمت pngیا jpg گرفت</div>
    <q-uploader class="q-mt-sm" label="اپلود عکس" accept=".png,.jpg"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>