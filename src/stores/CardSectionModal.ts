import { defineStore } from "pinia";
import { api } from "boot/axios";
export const CardSectionModalCounter = defineStore("CardSectionModal", {
  state: () => {
    return { CardSectionModal: [] };
  },
  actions: {
    GetCardSectionModal() {
      api
        .get("CardSectionModal")
        .then((res) => {
          this.CardSectionModal = res.data;
        })
        .then((err) => console.log(err));
    },
  },
});
