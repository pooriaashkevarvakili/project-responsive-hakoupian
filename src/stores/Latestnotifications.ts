import { defineStore } from "pinia";
import {api} from "boot/axios";

export const LatestnotificationsCounter = defineStore("latestnotifications", {
  state: () => {
    return {
      Latestnotifications: [],
    };
  },
  actions: {
    getlatestnotifications() {
      api
        .get("Latestnotifications")
        .then((res) => {
          this.Latestnotifications = res.data;
        })
        .then();
    },
  },
});
