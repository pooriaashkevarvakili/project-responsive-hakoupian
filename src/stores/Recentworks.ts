import { defineStore } from "pinia";
import {api} from "boot/axios";

export const RecentworksCounter = defineStore("recentworks", {
  state: () => {
    return {
      Recentworks: [],
    };
  },
  actions: {
    getRecentworks() {
      api
        .get("Recentworks")
        .then((res) => (this.Recentworks = res.data))
        .then();
    },
  },
});
