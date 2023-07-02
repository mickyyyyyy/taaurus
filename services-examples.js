// Creating a delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Scrolling variables
let scrollContainer = document.querySelector(".example-wrapper");
let backBtn = document.getElementById("back-button");
let nextBtn = document.getElementById("forward-button");
const services = document.getElementById("services-examples");
let examplesDiv = document.getElementById('services-examples');
let examples = examplesDiv.getElementsByClassName("media");

// Start in the middle
scrollContainer.scrollLeft += services.offsetWidth;

nextBtn.addEventListener("click", () => {
  // Add the leftmost example to the very right
  const head = examples[0];
  const tail = examples[examples.length-1];
  tail.after(head);
});

// Go to the previous service example
backBtn.addEventListener("click", () => {
  // Add the rightmost example to the very left
  const head = examples[0];
  const tail = examples[examples.length-1];
  head.before(tail);
});
