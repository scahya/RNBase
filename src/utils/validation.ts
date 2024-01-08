/**
 * @description Check Email Pattern
 *
 * @param {val}   String
 *
 * @return {String}
 */
const checkValidationEmail = (val) => {
  let regexEmail = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$/;
  if (val === "" || val === null) {
    return "Email is required";
  } else {
    if (!val.match(regexEmail)) {
      return "Invalid email format";
    } else {
      return "";
    }
  }
};
const checkValidationUsername = (val) => {
  let regexUsername = /\s/;
  if (val === "") {
    return "Username is required";
  } else {
    if (val.match(regexUsername)) {
      return "Username cannot contain space";
    } else {
      return "";
    }
  }
};

/**
 * @description Check Phone Pattern handle code phone (first 0 or +62)
 *
 * @param {val}   String
 *
 * @return {String}
 */
const checkValidationPhone = (val) => {
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

/**
 * @description Check Phone Pattern without handle code phone
 *
 * @param {val}   String
 *
 * @return {String}
 */

/**
 * @description Check Contain Password Pattern
 *
 * @param {val}   String
 *
 * @return {String}
 */
const checkContainValidationPassword = (val, field) => {
  const numberPattern = /\d/;
  const upperCasePattern = /[A-Z]/;
  const lowerCasePattern = /[a-z]/;

  switch (field) {
    case "characterMinimum":
      return val.length >= 8;
    case "containNumber":
      return numberPattern.test(val);
    case "containUpperCase":
      return upperCasePattern.test(val);
    case "containLowerCase":
      return lowerCasePattern.test(val);
    case "all":
      return (
        val.length >= 8 &&
        numberPattern.test(val) &&
        upperCasePattern.test(val) &&
        lowerCasePattern.test(val)
      );
    default:
      return false;
  }
};

/**
 * @description Check only Number Pattern
 *
 * @param {val}   String
 *
 * @return {String}
 */
const checkValidationOnlyNumber = (val, field) => {
  const numberPattern = /^[0-9\b]+$/;

  if (val === "") {
    switch (field) {
      case "ID Number":
      case "rtrw":
        return "empty";
      case "billingNumber":
        return "Bill number is required";
      default:
        return "value must be filled";
    }
  }

  if (isNaN(val) || !numberPattern.test(val)) {
    return field === "billingNumber"
      ? "Bill number can't contain letters or special characters"
      : "value must be valid";
  }
  return "";
};

export default {
  checkValidationEmail,
  checkValidationPhone,
  checkContainValidationPassword,
  checkValidationOnlyNumber,
  checkValidationUsername,
};
