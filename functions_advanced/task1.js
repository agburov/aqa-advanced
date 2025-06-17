function handleEven(number) {
  console.log(`${number} is even`);
}

function handleOdd(number) {
  console.log(`${number} is odd`);
}

function handleNum(num, onEven, onOdd) {
  if (num % 2 === 0) {
    onEven(num);
  } else {
    onOdd(num);
  }
}

handleNum(12, handleEven, handleOdd);
