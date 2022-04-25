import { defineStore } from "pinia";
import {api} from "boot/axios";

export const CardDashboardCounter = defineStore("cardDashboard", {
  state: () => {
    return {
      cardDashboard: [],
    };
  },
  actions: {
    getPosts() {
      api
        .get("cardDashboard")
        .then((res) => {
          this.cardDashboard = res.data;
        })
        .then();
    },
  },
});
