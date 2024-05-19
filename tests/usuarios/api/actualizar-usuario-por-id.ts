import { Usuario } from "../types/usuario";
import { apiContext } from "./api-context";

export async function actualizarUsuarioPorId(data: Usuario) {
  try {
    const api = await apiContext();
    const respuesta = await api.put(`users/${data.id}`, {
      data: {
        first_name: data.first_name,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error.message);
  }
}
