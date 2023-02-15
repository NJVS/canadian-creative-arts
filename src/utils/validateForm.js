

export function validateForm(formData) {
  return new Promise((resolve, reject) => {
    const invalidData = [];

    const email = formData.get('email'); // for checking if email is the same

    for (const [name, value] of formData) {
      // console.log(`Name: ${name}, Value: ${value}`)
      // console.log(type);

      if (value === '') { // blank input validation
        invalidData.push({ name: name, msg:"Input is required" });
      } else {            // validate depends on case
        switch (name) {
          case 'email':
            // check for pattern
            const patternInvalid = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            if (patternInvalid) invalidData.push({ name: name, msg:"Please use valid email address" });
            break;
          case 'email_confirm':
            if (email !== value) invalidData.push({ name: name, msg:"Both email must be the same" });
            break;
          case 'birth_date':
            const month_diff = Date.now() - new Date(value).getTime();
            const age = Math.abs(new Date(month_diff).getUTCFullYear() - 1970);
            if (age < 18) invalidData.push({ name: name, msg:"You must be atleast 18 years old" })
            break;
          case 'phone_number':
            if (value.length !== 10) invalidData.push({ name: name, msg:"Must be 10 digit number" })
            break;
          default:
            break;
        }
      }
    }

    if (invalidData.length === 0) {
      resolve(formData);
    } else {
      reject(invalidData);
    }
  })
}