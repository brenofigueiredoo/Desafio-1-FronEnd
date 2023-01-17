import api from "../service";

test("Testando retorno correto da calculadora", async () => {
  let result = [];
  const onSubmit = async (data) => {
    await api
      .post("", { ...data })
      .then((res) => result.push(res.data))
      .catch((err) => console.log(err));
  };
  const obj = { amount: 15000, installments: 3, mdr: 4 };
  await onSubmit(obj);

  expect(result[0]["1"]).toEqual(13267);
  expect(result[0]["15"]).toEqual(13536);
  expect(result[0]["30"]).toEqual(13824);
  expect(result[0]["90"]).toEqual(14400);
});
