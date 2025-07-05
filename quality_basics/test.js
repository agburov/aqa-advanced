// This is a properly formatted file
function demo() {
  const message = 'This variable is now used';

  if (message.length > 0) {
    console.log('Using proper indentation and quotes');
    console.log(message);
  }

  return 'Using single quotes as per Prettier config';
}

// Calling the function to avoid unused function warning
demo();
