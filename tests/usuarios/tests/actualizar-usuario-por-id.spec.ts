import test, { expect } from "@playwright/test";
import { actualizarUsuarioPorId } from "../api/actualizar-usuario-por-id";
import { obtenerUsuarioPorId } from "../api/obtener-usuario-por-id";
import { nuevoUsaurioMock } from "../mocks/usuario-mock";

test("Verificar que se actualice el usuario", async () => {
  // actualizar usaurio
  const respuesta = await actualizarUsuarioPorId(nuevoUsaurioMock);
  expect(respuesta?.ok()).toBeTruthy();

  // recuperar el usaurio y verificar que se hizo el cambio
  const recuperarUsuario = await obtenerUsuarioPorId(nuevoUsaurioMock.id);
  const usuario = await recuperarUsuario?.json();
  expect(usuario.data.first_name).toBe(nuevoUsaurioMock.first_name);
});
