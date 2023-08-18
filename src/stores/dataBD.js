import { defineStore } from "pinia";

export const useDataBase = defineStore("data-base", {
  state: () => ({
    data: [],
    errorData: [],
  }),
});
