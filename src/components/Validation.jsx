const Validation = (firstName, lastName, email, phone) => {
  const newErrors = {};

  if (!firstName) {
    newErrors.firstName = "First Name is required.  ";
  } else if (firstName.length < 4) {
    newErrors.firstName = "First Name must be at least 4 characters.  ";
  }

  if (!lastName) {
    newErrors.lastName = "Last Name is required.  ";
  } else if (lastName.length < 4) {
    newErrors.lastName = "Last Name must be at least 4 characters.  ";
  }

  if (!email) {
    newErrors.email = "Email is required.  ";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Email address is invalid.  ";
  }

  if (!phone) {
    newErrors.phone = "Password should Number. ";
  } else if (/^\d{1,4}$/.test(phone)) {
    newErrors.phone = "Password must be at max 4 characters.  ";
  }

  return newErrors;
};

export default Validation;
