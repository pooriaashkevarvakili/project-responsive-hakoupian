<template>
  <div class="timeline" style="margin-top: -30px">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        <span class="text-subtitle2 q-mr-xl">{{ $t("RecentActivities") }}</span>
      </q-timeline-entry>

      <q-timeline-entry
        title="علیرضافتحی"
        avatar="https://s16.picofile.com/file/8419351092/image1.jpg"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="محمددلیری"
        avatar="https://s23.picofile.com/file/8449412092/image2.jpg"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="محمد وکیلی"
        avatar="https://s17.picofile.com/file/8419817268/image3.jpg"
      >
      </q-timeline-entry>
      <q-timeline-entry
        title="علی محمدی"
        avatar="https://s23.picofile.com/file/8449412100/image4.png"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { computed } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const q = useQuasar();
    return {
      layout: computed(() => {
        return q.screen.lt.sm
          ? "dense"
          : q.screen.lt.md
          ? "comfortable"
          : "loose";
      }),
    };
  },
};
</script>

<style></style>
