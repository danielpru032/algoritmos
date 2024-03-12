function prodArr(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
}

console.log(prodArr([3, 3, 2, 1, 2]));
