<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-7 col-xs-12 col-sm-12">
        <q-btn
          @click="alert = true"
          icon="fa fa-plus"
          class="border-1 full-width text-red-4"
        >
          <span>{{$t('RecordEvaluation')}}</span>
        </q-btn>
        <q-dialog maximized v-model="alert">
          <q-card
            dir="rtl"
            style="max-width: 1000px; width: 1000px; height: 600px"
          >
            <q-card-section>
              <q-icon
                name="close"
                class="cursor-pointer"
                size="1.8em"
                v-close-popup
              />
              <ModalRequirementApplicant />
              <hr class="q-mt-lg" />
              <div class="q-pa-md">
                <div class="row">
                  <q-card
                    class="flex justify-between border-1"
                    style="width: 500px; height: 80px"
                  >
                    <div class="col-6">
                      <div class="flex q-mr-sm ">
                        <div>
                          <img
                            src="image2.jpg"
                            style="
                              width: 60px;
                              height: 60px;
                              border-radius: 50%;
                            "
                            alt=""
                            class="q-mt-xs"
                          />
                        </div>
                        <div>
                          <div class="q-mr-sm q-mt-xs">9:45 10خرداد</div>
                          <div class="q-mr-sm ">
                         {{$t('RejectedEmployer')}}
                          </div>
                          <div class="q-mr-sm bg-grey-5 text-white flex justify-center ">
                        {{$t('AccountingManager')}}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-1">
                      <q-icon size="2em" name="refresh"></q-icon>
                      <span>{{$t('Appeal')}}</span>
                    </div>
                  </q-card>
                  <div class="col-5"><TimeLine /></div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>

      <div class="col-4">
        <TimeLine />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
export default {
  components: {
    TimeLine: defineAsyncComponent(() => import("./TimeLine.vue")),
    ModalRequirementApplicant: defineAsyncComponent(() =>
      import("./ModalRequirementApplicant.vue")
    ),
  },
  setup() {
    return {
      alert: ref(false),
    };
  },
};
</script>

<style></style>
