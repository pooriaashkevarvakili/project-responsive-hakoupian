const StatusOptions=['فعال','غیرفعال']
const titleOPtions = ["عنوان", "کارشناس", "کاردان", "مدیر", "معاونت"];
import { ref } from "vue";
export default {
  setup() {
      const status= ref(null)
    const titleOPtion = ref(titleOPtions);
    const title = ref(null);
    const repeatPassword = ref(null);
    const password = ref(null);
    const email = ref(null);
    const StatusOption = ref(StatusOptions);
    const LastName = ref(null);
    const showName = ref(null);
    const phone = ref(null);
    return {
      titleOPtion,
      title,StatusOption,
      repeatPassword,
      alert: ref(false),
      password,
      LastName,
      showName,status,
      email,
      phone,
    };
  },
};