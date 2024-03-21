/**
 * @description Check Email Pattern
 *
 * @param {val}   String
 *
 * @return {String}
 */
const checkValidationEmail = (val: string) => {
  let regexEmail = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$/;
  if (val === "" || val === null) {
    return "Email is required";
  } else if (!RegExp(regexEmail).exec(val)) {
    return "Invalid email format";
  } else {
    return "";
  }
};
const checkValidationUsername = (val: string) => {
  let regexUsername = /\s/;
  if (val === "") {
    return "Username is required";
  } else if (RegExp(regexUsername).exec(val)) {
    return "Username cannot contain space";
  } else {
    return "";
  }
};

/**
 * @description Check Phone Pattern handle code phone (first 0 or +62)
 *
 * @param {val}   String
 *
 * @return {String}
 */
const checkValidationPhone = (val: string) => {
  if (!val || val.trim() === "") {
    return "Phone Number is required";
  }

  const numericVal = val.replace(/\D/g, ""); // Remove non-numeric characters

  if (!/^(0|\+?62)/.test(numericVal)) {
    return "Phone Number must start with +62, 62, or 0";
  }

  if (numericVal.length < 10) {
    return "Phone Number minimum length is 10";
  }
  return "";
};

export default {
  checkValidationEmail,
  checkValidationPhone,
  checkValidationUsername,
};
