import { defineStore } from "pinia";
import { getTasks, newTask } from "../supabase";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [],
    };
  },
  actions: {
    async setTask() {
     this.tasks = await getTasks()
      console.log (this.tasks)
    },

    updateTask(id, task) {
      //TODO modificar el estado de la task.
      //Encontrar el indice de la task con ese id y cambiar su contenido con task
    },

    deleteTask(id) {
      //TODO modificar el estado borrando ese task
      //Encontramos el indice de ese id y eliminamos ese indice de la array
    },
    addTask(title, description) {
      const task = {
        id: this.tasks.length + 1,
        title,
        description,
      }
      this.tasks.push(task);

      //TODO modificar el estado de la task haciendo un push de la task
      //Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendríamos que hacer el getTask
    },
  },
});
