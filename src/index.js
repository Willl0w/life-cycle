function numberToRoman(number) {
  if (number % 1 !== 0 || number <= 0 || number >= 4000) {
    throw new Error("le nombre doit être un entier strictement positif et compris entre 1 et 3999");
  }
  var romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XCIX: 99,
    L: 50,
    XLIX: 49,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var roman = "";
  for (var i in romanNumbers) {
    while (number >= romanNumbers[i]) {
      roman += i;
      number -= romanNumbers[i];
    }
  }
  return roman;
}
console.log(numberToRoman(5));
