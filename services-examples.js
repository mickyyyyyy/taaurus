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
scrollContainer.scrollLeft += 1 * services.offsetWidth;

// Counts how far we've moved to the right
rightCount = 0;

nextBtn.addEventListener("click", () => {
  // Add the leftmost example to the very right
  const head = examples[0];
  const tail = examples[examples.length-1];
  tail.after(head);
  scrollContainer.style.scrollBehavior = '';
  scrollContainer.style.transition = '';
  scrollContainer.scrollLeft -= services.offsetWidth;
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.style.transition = 'transform 0.5s';
  delay(400);
  scrollContainer.scrollLeft += services.offsetWidth;
});

// Go to the previous service example
backBtn.addEventListener("click", () => {
  // Add the rightmost example to the very left
  const head = examples[0];
  const tail = examples[examples.length-1];
  head.before(tail);
  scrollContainer.style.scrollBehavior = '';
  scrollContainer.style.transition = '';
  scrollContainer.scrollLeft += services.offsetWidth;
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.style.transition = 'transform 0.5s';
  delay(400);
  scrollContainer.scrollLeft -= services.offsetWidth;
});
