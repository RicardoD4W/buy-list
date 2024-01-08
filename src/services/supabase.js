import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nattqolwpnsvhbaiqaby.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdHRxb2x3cG5zdmhiYWlxYWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NDg4ODcsImV4cCI6MjAwNDQyNDg4N30.1tICn-9MIVDtIbWHiwvMYf5KAASk4_vVYzuttNNoDTA";
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para iniciar sesión
export async function login(email, password, nombre) {
  try {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    data && localStorage.setItem("user", JSON.stringify({ nombre, data }));
    return data;
  } catch (error) {
    return false;
  }
}

// Función para cerrar sesión
export async function signOut() {
  const { error } = await supabase.auth.signOut();
}

export async function getAllProducts() {
  let { data: producto, error } = await supabase
    .from("productos")
    .select("*, usuarios ( nombre )")
    .eq("comprado", "false")
    .order("created_at", { ascending: false });
  return producto;
}

export async function getMyOwnId() {
  if (!JSON.parse(localStorage.getItem("user"))) return;
  const data = JSON.parse(localStorage.getItem("user"));
  const nombre = data.nombre;

  let { data: id, error } = await supabase
    .from("usuarios")
    .select("id")
    .eq("nombre", nombre);

  if (error) return;

  return id[0].id;
}

export async function saveNewOneProduct(
  cantidad,
  nombre,
  supermercado,
  descripccion,
  myOwnId
) {
  if (!nombre || cantidad > 10000 || cantidad <= 0) return;
  const { data, error } = await supabase
    .from("productos")
    .insert([
      {
        comprado: "FALSE",
        supermercado: supermercado,
        cantidad: cantidad,
        user_id: myOwnId,
        nombre: nombre,
        descripccion: descripccion,
      },
    ])
    .select()
    .order("created_at", { ascending: false });
}

export async function suscribeAllEvents(setFlag) {
  const productos = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "productos" },
      (payload) => {
        setFlag((flag) => !flag);
      }
    )
    .subscribe();
  return productos;
}

export async function deleteOneProduct(id) {
  const { error } = await supabase.from("productos").delete().eq("id", id);
}

export async function updateOneProduct(
  nombre,
  supermercado,
  cantidad,
  descripccion,
  id
) {
  const { data, error } = await supabase
    .from("productos")
    .update({
      "nombre": nombre,
      "supermercado": supermercado,
      "cantidad": cantidad,
      "descripccion": descripccion,
    })
    .eq("id", id)
    .select()
    .order("created_at", { ascending: false });
}
