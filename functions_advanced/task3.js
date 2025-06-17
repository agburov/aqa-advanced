function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  if (denominator === 0) {
    throw new Error('Division by zero is not allowed');
  }

  return numerator / denominator;
}

try {
  let result1 = divide(10, 2);
  console.log('Result:', result1);
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Operation completed');
}

try {
  let result2 = divide(5, 0);
  console.log('Result:', result2);
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Operation completed');
}

try {
  let result3 = divide('text', 2);
  console.log('Result:', result3);
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Operation completed');
}
