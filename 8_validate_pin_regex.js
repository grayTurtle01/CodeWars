function validatePIN (pin) {
  //return true or false
  r = /^[0-9]{4}$|^[0-9]{6}$/.test(pin)
  return r
}

console.log(validatePIN("123456"))
