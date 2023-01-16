import * as yup from "yup";

export const schemaCalculation = yup.object({
  amount: yup
    .number()
    .min(1000, "amount must be greater than or equal to 1000")
    .required("Amount is required"),
  installments: yup
    .number()
    .min(1, "minimum value is 1")
    .max(12, "up to 12 installments")
    .required("Installments is required"),
  mdr: yup
    .number()
    .min(0, "mdr must be greater than or equal to 0")
    .max(100, "mdr must be less than or equal to 100")
    .required("mdr is required"),
});
