import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuth: false,
    user: {
      name:"mel",
      id: "",
      // password: "",
    },

    //Guardaremos el id de supabase que nos dara al hacer el login
    // id: undefined
    //     }
  }),

  actions: {
    logIn(id) {
      this.isAuth = true;
      this.user.id = id;
    },
  },
});
