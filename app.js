// A function to toggle input without using if
// num = 1 return 2 , num = 2 return 1;

function toggleNum(num) {
  //    using object,
  const obj = {
    1: 2,
    2: 1,
  };
  return obj[num];
}

console.log(toggleNum(2));
