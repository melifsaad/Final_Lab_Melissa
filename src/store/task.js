import { defineStore } from "pinia";
import { getTasks, newTask, deleteTask, updateTask } from "../supabase";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [],
    };
  },
  actions: {
    async setTask() {
      this.tasks = await getTasks();
      console.log(this.tasks);
    },

    updateTask(id, taskEdit) {
const newArray = this.tasks(id)
this.tasks[newArray]
    },

    async deleteTaskStore(id) {
      //Borra la tarea de deleteTask del supabase
      await deleteTask(id);
      //Recoge las tareas de supabase y las guarda en store
      this.tasks = await getTasks();
      console.log("store", id)
    },

    addTask(title, description) {
      const task = {
        id: this.tasks.length + 1,
        title,
        description,
      };
      this.tasks.push(task);

      //TODO modificar el estado de la task haciendo un push de la task
      //Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendríamos que hacer el getTask
    },
  },
});
