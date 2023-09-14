// Create a large JavaScript file (for demonstration purposes)
const largeArray = new Array(1000000).fill(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);

fetch("https://catfact.ninja/fact");

// Simulate a long-running operation
function simulateLoad() {
  console.log("Start loading large.js");
  for (let i = 0; i < largeArray.length; i++) {
    // Simulate some processing
  }
  console.log("Finished loading large.js");
}

// Call the simulation function when the page loads
window.addEventListener("load", simulateLoad);
