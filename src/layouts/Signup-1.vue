<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <q-icon name="fa fa-user"></q-icon>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center">
              <div class="col q-mt-lg text-h6 ellipsis">ثبت نام</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" label="Username" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />

              <div>
                <q-btn
                @click="goMainLayout"
                  class="full-width "
                  :label="$t('Signup')"
                 
                  type="button"
                  color="primary"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import {useRouter} from "vue-router"
export default defineComponent({
  setup() {
    const router=useRouter()
    const goMainLayout=()=>{
     router.push('/dashboard')
    }
    return {
      username: ref("Pratik"),
      password: ref("12345"),
      goMainLayout
    };
  },
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
