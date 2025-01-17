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

function eventLoop() {
  // console orders
  console.log("normal console");

  setTimeout(() => {
    console.log("set time out console");
  }, 0);

  Promise.resolve().then(() => {
    console.log("promise console");
  });
  console.log("another normal console");
}

function arthimaticOperation() {
  console.log("5" + 5); //55
  console.log("5" - "5"); //0
}
