// Get references to HTML elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

// Function to show message with delay
async function showMessageWithDelay() {
  const text = textInput.value;
  const delay = delayInput.value * 1000; // Convert seconds to milliseconds

  // Wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message on the webpage
  outputDiv.innerText = text;
}

// Attach the function to the button click event
btn.addEventListener('click', showMessageWithDelay);
