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

export const logIn = async (email, password) => {
  const { data, error }
    = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  if (error) return false
  return data.user.id;
};


export const newTask = async (task) => {
  const response = await supabase.from("task")
    .insert(task);
  console.log(response);
};

export const getTasks = async () => {
  const response = await supabase
    .from("task")
    .select("*")
    .order("id", { ascending: false });
  console.log(response);
  return response.data
};

export const updateTask = async (taskId, title, description) => {
  console.log(taskId, title, description, "prueba")
  const response = await supabase
    .from("task")
    .update({ title, description })
    .eq("id", taskId);
  console.log(response);
};

export const completedTask = async (id, isCompleted) => {
  await supabase
    .from('task')
    .update({ isCreated: isCompleted })
    .eq("id", id)
};

export const deleteTask = async (taskId) => {
  const response = await supabase
    .from("task")
    .delete()
    .eq("id", taskId);
};

export const logOut = async () => {
  const response = await supabase.auth.signOut();
  if (response.error) {
    console.log('ha habido un problema con el logOut');
    return false
  }
  return true
};

export const recuperarMail = async (email) => {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email)
  console.log(error)
  return error
};

export const updateUser =async (email, password) => {
const { user, error } = await supabase.auth.update({
  email,
  password,
  data: { hello: 'world' }
})
console.log(error)
};

