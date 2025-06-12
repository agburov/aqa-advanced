function checkAge(minAge) {
  return function (age) {
    const isAdult = age >= minAge;
    console.log(`Is adult (${age}):`, isAdult);
    return isAdult;
  };
}

const isAdult = checkAge(18);

isAdult(25);
isAdult(15);
