

export function validateForm(formData) {
  return new Promise((resolve, reject) => {
    let invalidData = {};

    for (const [name, value] of Object.entries(formData)) {
      if (value.length === 0 || value === '') { // blank input validation
        invalidData = { ...invalidData, [name]: "Input is required" };
      } else {                  // validate depends on case
        switch (name) {
          case 'email':
            // check for pattern
            const patternInvalid = !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            if (patternInvalid) invalidData = { ...invalidData, [name]: "Please use valid email address" };
            break;
          case 'email_confirm':
            if (formData['email'] !== value) invalidData = { ...invalidData, [name]: "Both email must be the same" };
            break;
          case 'birth_date':
            const month_diff = Date.now() - new Date(value).getTime();
            const age = Math.abs(new Date(month_diff).getUTCFullYear() - 1970);
            if (age < 18) invalidData = { ...invalidData, [name]: "You must be atleast 18 years old" };
            break;
          case 'phone_number':
            if (value.length !== 10) invalidData = { ...invalidData, [name]: "Must be 10 digit number" }
            break;
          default:
            break;
        }
      }
    }

    if (Object.keys(invalidData).length === 0) {
      resolve();
    } else {
      reject(invalidData);
    }
  })
}