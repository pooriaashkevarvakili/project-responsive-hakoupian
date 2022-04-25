<template>
     <q-expansion-item
            icon="fa fa-gear"
            class="text-subtitle2"
            :label="$t('SystemManagement')"
          >
            <q-list class="q-pl-lg"> </q-list>
            <q-list class="q-pl-lg">
              <q-item to="/titles" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="fa fa-file-lines" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    $t("Titles")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item to="/userManagement" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon name="fa fa-person" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle2">{{
                    $t("UserManagement")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
</template>

<script>
export default {

}
</script>

<style>

</style>