import * as yup from "yup";

export const schemaCalculation = yup.object({
  amount: yup
    .number()
    .typeError("You must specify a number")
    .min(1000, "Min Value 1000")
    .required("Amount is required"),
  installments: yup
    .number()
    .typeError("You must specify a number")
    .min(1, "Min value 0")
    .max(12, "Max value 12")
    .required("Installments is required"),
  mdr: yup
    .number()
    .typeError("You must specify a number")
    .min(0, "Min value 0")
    .max(100, "Max value 100")
    .required("MDR is required"),
});
