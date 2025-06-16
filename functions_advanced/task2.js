function countDown(num) {
  if (typeof num !== 'number') {
    console.log('You must enter only numbers!');
    return;
  } else {
    console.log(`You entered a number: ${num}`);
  }

  function countDownRecursive(n) {
    if (n <= 0) {
      console.log('End of counting');
      return;
    }
    console.log(`Downsizing => ${n}`);
    countDownRecursive(n - 1);
  }
  countDownRecursive(num);
}

countDown(5);
