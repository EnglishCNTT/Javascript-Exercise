function reverseString(str) {
  // Convert the string into an array of characters,
  // reverse it, and then join it back together.
  return str.split("").reverse().join("");
}
console.log(reverseString("hello there")); // outputs 'ereht olleh'

