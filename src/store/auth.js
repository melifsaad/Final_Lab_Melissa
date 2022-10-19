import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuth: false,
    user: {
      email: "",
      password: "",
    },

    //Guardaremos el id de supabase que nos dara al hacer el login
    // id: undefined
    //     }
  }),

  actions: {
    logIn(email, password) {
      this.isAuth = true;
      this.user.email = email;
    },
  },
});
