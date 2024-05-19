import { apiContext } from "./api-context";

export async function eliminarUsuarioPorId(id) {
  try {
    const api = await apiContext();
    const respuesta = await api.delete(`users/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error.message);
  }
}
