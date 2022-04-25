import { useQuasar } from "quasar";
import { ref } from "vue";
const jens=['مذکر','مونث']
const educationOne=["زیردیپلم ","کاردانی","کارشناسی ارشد","کارشناسی","دکترس"]
const stringOptions = ["متقاضی جدید","درانتظارمصاحبه اول","ردشده","تایید برای مصاحبه","ردشده درمصاحبه","تکمیل مدارک"];
const stringOne=['یک روز قبل',"یک هفته اخیر","یک ما ه اخیر","همه زمان ها"]
export default {
  setup() {
    const email=ref(null)
    const q = useQuasar();
    const options = ref(stringOptions);
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const sex=ref(null)
    const jensOne=ref(jens)
    const skills=ref(null)
    const resume=ref(null)
    const nameOne = ref(stringOne);
    const nameTwo=ref(null)
    const phone=ref(null)
    const educationOptions=ref(educationOne)
    const education=ref(null)
    return {
      name,
      options,
      age,
      educationOptions,
      sex,
      education,
      jensOne,
      resume,
      email,
      accept,
      skills,
      nameOne,
      phone,
nameTwo,
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