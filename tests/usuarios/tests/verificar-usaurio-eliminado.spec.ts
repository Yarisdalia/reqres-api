import test, { expect } from "@playwright/test";
import { eliminarUsuarioPorId } from "../api/eliminar-usuario-por-id";
import { obtenerUsuarioPorId } from "../api/obtener-usuario-por-id";

const idMock = 4;

test("Verificar que se elimina el usuario por el id solicitado", async () => {
  // eliminamos el usuario
  const respuesta = await eliminarUsuarioPorId(idMock);

  expect(respuesta?.ok()).toBeTruthy();

  // recuperar el usaurio y verificar que esta eliminado
  const recuperarUsuario = await obtenerUsuarioPorId(idMock);
  const usuario = await recuperarUsuario?.json();
  expect(usuario.data.id).not.toBe(idMock);
});
