const optionstypeInterviewOne = ["حضوری ", "آنلاین"];
const locationInterviewOptions = ["شرکت", "کارخانه"];
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  setup() {
      const q=useQuasar()
      const accept = ref(false)
    const locationInterview = ref(null);
    const typeInterview = ref(null);
    const locationInterviews = ref(locationInterviewOptions);
    const optionstypeInterview = ref(optionstypeInterviewOne);
    return {
      typeInterview,q,
      locationInterview,
      locationInterviews,
      optionstypeInterview,accept,
      time: ref(""),
      timeWithSeconds: ref("10:56:00"),
      date: ref(""),
      onSubmit() {
        if (accept.value !== true) {
          q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
    };
  },
};