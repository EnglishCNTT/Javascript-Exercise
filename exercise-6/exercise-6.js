function convertNumber(number) {
  let binary = "";

  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }
  
  return binary;
}
console.log(convertNumber(47)); // Output: 101111
console.log(convertNumber(5)); // Output: 101

