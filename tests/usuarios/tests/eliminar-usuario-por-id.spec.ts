import test, { expect } from "@playwright/test";
import { eliminarUsuarioPorId } from "../api/eliminar-usuario-por-id";

const useIdMock = 4;

test("Verificar que se elimina el usuario por el id solicitado", async () => {
  const respuesta = await eliminarUsuarioPorId(useIdMock);

  expect(respuesta?.ok()).toBeTruthy();
});
