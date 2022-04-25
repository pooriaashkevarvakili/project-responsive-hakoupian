const educations=['دیپلم ',"زیردیپلم","کاردانی","کارشناسی","کارشناسی ارشد","دکترا"]
const optionsOne = ["it","افیس","مایکروسافت"];
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {

    const accept=ref(false)
    const email = ref(null);
    const phone = ref(null);
    const education=ref(null)
    const q = useQuasar();
    const description = ref(null);
    const nameOne = ref(optionsOne);
    const resume = ref(null);
    const skills=ref(null)
    const optionsEducation=ref(educations)
    const age=ref(null)
    return {
      email,age,education,optionsEducation,
      phone,accept,
      resume,
      nameOne,
      description,skills,
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