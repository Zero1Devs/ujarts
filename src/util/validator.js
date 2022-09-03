import * as yup from "yup";

yup.setLocale({
  string: {
    min: " must have a minimum of ${min} characters",
    max: " must have a maximum ${max} characters",
    uuid: "User not authenticated",
    trim: ": remove white spaces",
    email: " must be a valid email",
    matches: " deve conter apenas números",
  },
  mixed: {
    required: " is a required field",
  },
  number: {
    min: " must be equal or greater than 1",
  },
});
export const BookingStepOne = yup.object().shape({
  date: yup.string().strict(true).required(),
  time: yup.string().strict(true).required(),
});

export const BookingStepTwo = yup.object().shape({
  quantity: yup.number().min(1).strict(true).required(),
});
export const BookingStepThree = yup.object().shape({
  name: yup.string().strict(true).min(2).required().trim(),
  surname: yup.string().strict(true).min(2).required().trim(),
  email: yup.string().email(),
  confirm_email: yup.string().oneOf([yup.ref("email"), null], " must match"),
  phone_number: yup
    .string()
    .strict(true)
    .matches(/^[0-9]+$/)
    .min(10)
    .max(12)
    .required(),
});
export const BookingStepFour = yup.object().shape({
  name: yup.string().strict(true).min(2).required().trim(),
  surname: yup.string().strict(true).min(2).required().trim(),
  email_address: yup.string().email(),
  phone_number: yup
    .string()
    .strict(true)
    .matches(/^[0-9]+$/)
    .min(9)
    .max(9)
    .required(),
});

export const getValidationErrorMessage = (error) => {
  switch (error) {
    case "date":
      return "Date";
    case "time":
      return "Time";
    case "surname":
      return "Surname";
    case "name":
      return "Name";
    case "email":
      return "Email";
    case "confirm_email":
      return "Emails";
    case "phone_number":
      return "Phone number";
    case "quantity":
      return "Quantity";
    default:
      return "";
  }
};
