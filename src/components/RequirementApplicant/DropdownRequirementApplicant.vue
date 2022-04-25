<template>
  <q-btn-dropdown
    :label="$t('SendResume')"
    menu-anchor="bottom end"
    icon="fa fa-download"
    class="text-white bg-blue-5 q-ml-xs"
  >
    <q-card dir="rtl" style="max-width: 350px; width: 350px; height: 410px">
      <q-card-section>
        <span>{{ $t("ManagerEvaluation") }}</span>
        <hr />
        <q-input class="input-sixteen" filled :label="$t('Score')" />
        <div class="q-pa-md" style="max-width: 500px">
          <q-input
            class="input-one"
            :label="$t('OpinionApplicant')"
            v-model="text"
            filled
            type="textarea"
          />
        </div>
        <div class="row q-col-gutter-sm q-py-sm">

       
        <div class="col-md-6 col-lg-3 col-sm-12 col-xs-12">
      <q-btn icon="fa fa-thumbs-up" class="full-width">
        <span class="q-mr-sm" >{{$t('Confirmation')}}</span>
      </q-btn>
        </div>
          <div class="col-md-6 col-lg-3 col-sm-12 col-xs-12">
      <q-btn icon="fa fa-thumbs-down" class="full-width">
        <span class="q-mr-sm">{{$t('Reject')}}</span>
      </q-btn>
        </div>
         </div>
         <q-btn class="full-width q-mt-lg bg-red-4 text-white">{{$t('Registration')}}</q-btn>
      </q-card-section>
    </q-card>
  </q-btn-dropdown>
</template>

<script>
export default {};
</script>

<style>
</style>