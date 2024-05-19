import test, { expect } from "@playwright/test";
import { obtenerUsuarioPorId } from "../api/obtener-usuario-por-id";

const useIdMock = 1;

test("Verificar que se obtiene el usuario por el id solicitado", async () => {
  const respuesta = await obtenerUsuarioPorId(useIdMock);

  const data = await respuesta?.json();

  expect(respuesta?.ok()).toBeTruthy();
  expect(data.data.id).toEqual(useIdMock);
  expect(data.data.email).toContain("@");
  expect(data.data.avatar).toContain("https://reqres.in/img/");
});
