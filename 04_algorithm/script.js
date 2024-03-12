function contarMonos(n) {
  const arr = [n];
  for (i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  /* const arr = [];
  arr.length = n;
  arr.forEach((element, i) => {
    arr.push(i + 1);
  });
  console.log(arr); */
}
contarMonos(100);
