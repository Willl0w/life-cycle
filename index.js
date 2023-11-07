const numberToRoman = (number) => {
  const romanNumbers = {
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  if (number === 0 || number % 1 !== 0) {
    return "le format du chiffre n'est pas le bon";
  }

  for (let i in romanNumbers) {
    while (number >= romanNumbers[i]) {
      roman += i;
      number -= romanNumbers[i];
    }
  }
  return roman;
};

console.log(numberToRoman(5));
