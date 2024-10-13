// Select the button and the output element
const button = document.getElementById('timestampButton');
const output = document.getElementById('timestampOutput');

// Function to get the current timestamp and display it
button.addEventListener('click', () => {
    const currentTimestamp = new Date().toLocaleString();
    output.textContent = `Timestamp: ${currentTimestamp}`;
    
    
});

