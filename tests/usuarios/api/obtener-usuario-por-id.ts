import { apiContext } from "./api-context";

export async function obtenerUsuarioPorId(id) {
  try {
    const api = await apiContext();
    const respuesta = await api.get(`users/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error.message);
  }
}
