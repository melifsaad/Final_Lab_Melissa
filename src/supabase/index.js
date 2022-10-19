import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const registro = async (email, password) => {
  const response = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(response);
};

//TODO identificar el result y retornar lo que nos interesa

export const logIn = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response.data.user.id;
};

export const newTask = async (task) => {
  const response = await supabase.from("task")
  .insert(task);
  console.log(response);
};

//TODO identificar el result y retornar lo que necesitamos ej: true si se ha insertado el registro y false si no

export const getTasks = async () => {
  const response = await supabase
    .from("task")
    .select("*")
    .order("id", { ascending: false });
  console.log(response);
};

//TODO retornar la informacion de los task, ej: response.data

export const updateTask = async (taskId, task) => {
  const response = await supabase
  .from("task")
  .update(task)
  .eq("id", "taskId");

  //TODO identificar el resultado y retornar lo que nos interesa, ej: true si ha ido bien, false si ha fallado
  console.log(response);
};

export const deleteTask = async (taskId) => {
  const response = await supabase
  .from("task")
  .delete()
  .eq("id", "taskId");
  //TODO identificar el resultado y retornar lo que nos interesa, ej: true si ha ido bien, false si ha fallado
  console.log(response);
};

export const logOut = async () => {
  const response = await supabase.auth.signOut();

  console.log(response);
};
