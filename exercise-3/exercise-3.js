function removeFromArray(array, deleteItem) {
  return array.filter(i => i !== deleteItem);
}
const result = removeFromArray([1, 2, 3, 4], 3);
console.log(result); // [1,2,4]
