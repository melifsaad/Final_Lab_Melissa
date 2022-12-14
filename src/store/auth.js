import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuth: false,
    user: {
      name:"Email usuario",
      id: "",
    },

  }),

  actions: {
    logIn(id) {
      this.isAuth = true;
      this.user.id = id;
    },
    
    logout(){
      this.isAuth = false;
      this.user.name = '';
      this.user.id = '';
     }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
      },
    ],
  },
});
