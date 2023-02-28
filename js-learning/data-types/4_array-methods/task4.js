let arr = [5, 2, 1, -10, 8];

arr.sort((num1, num2) => {
  if (num1 > num2) return -1;
  return 1;
});

alert(arr); // 8, 5, 2, 1, -10
