export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email adress is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be at least 6 characters";
  }

  if (!values.message) {
    errors.message = "Password is required";
  }

  return errors;
}
