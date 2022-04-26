<template>
  <div >
  <DeveloperAndroid/>
  <div class=" q-mr-sm">
   <q-icon size="1.8em" name="fa fa-building"/>
<span class="text-subtitle2">{{$t('Fany')}}</span>
  </div>
 
  <div class="flex justify-between">
    <div class="flex">
    <SearchApplicant/>
     
    <ModalFilter/>
    </div>


    <div><AddApplicant/></div>
  </div>
  </div>
  <Tables/>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
export default {
  components: {
    DeveloperAndroid: defineAsyncComponent(() =>
    import("components/RequirementApplicant/DeveloperAndroid.vue")
    ),
       Tables:defineAsyncComponent(()=>import('components/RequirementApplicant/Tables.vue')),
    SearchApplicant:defineAsyncComponent(() =>import("components/RequirementApplicant/SearchApplicant.vue")),
    ModalFilter:defineAsyncComponent(() =>import('src/components/RequirementApplicant/ModalFilter/ModalFilter.vue')),
    AddApplicant:defineAsyncComponent(() =>import('components/RequirementApplicant/AddApplicant.vue')),
 
  },
  setup() {
    return {
      value: ref(true),
    };
  },
};
</script>

<style>

</style>
