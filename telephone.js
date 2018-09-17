function telephoneCheck(str) {
  // Good luck!
  let telephoneRegex = /^[1]?[ ]?\d{10}$|^[1]?[ ]?\d{3} \d{3} \d{4}$|^[1]?[ ]?\(\d{3}\)[ ]?\d{3}\-\d{4}$|^[1]?[ ]?\d{3}\-\d{3}\-\d{4}$/
  return telephoneRegex.test(str);
}
