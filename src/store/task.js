import { defineStore } from "pinia";
import { newTask } from "../supabase";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [],
    };
  },
  actions: {
    setTask(task) {
      this.tasks = task
    },

    updateTask(id, task) {
      //TODO modificar el estado de la task.
      //Encontrar el indice de la task con ese id y cambiar su contenido con task
    },

    deleteTask(id) {
      //TODO modificar el estado borrando ese task
      //Encontramos el indice de ese id y eliminamos ese indice de la array
    },
    addTask(task) {
      //TODO modificar el estado de la task haciendo un push de la task
      //Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendríamos que hacer el getTask
    },
  },
});
