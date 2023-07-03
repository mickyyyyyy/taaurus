// Creating a delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Controlling the height of the banner based on the location
let body = document.querySelector("html");
let banner = document.querySelector(".banner");
let afterBanner = document.querySelector("main");
let navigationButtons = document.querySelector(".nav-options");

// Refresh pulls the user back to the top of the website
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  body.scrollTop = 0;
}

// Re-calculates the desired banner height
function reset_banner_height() {
  let scroll = body.scrollTop;
  let offset = afterBanner.offsetTop;
  let bannerHeight = offset - scroll;
  banner.style.height = `${Math.max(bannerHeight, 0)}px`;
}

// Adjusts the height of the banner when we scroll
window.addEventListener("scroll", () => {
  reset_banner_height();
});

// Allows us to adjust the height based on the new position we're in on the
// webpage from clicking one of the navigation buttons
navigationButtons.addEventListener("click", () => {
  reset_banner_height();
});

// Scrolling variables for service page examples gallery
let scrollContainer = document.querySelector(".example-wrapper");
let backBtn = document.getElementById("back-button");
let nextBtn = document.getElementById("forward-button");
const services = document.getElementById("services-examples");
let examplesDiv = document.getElementById('services-examples');
let examples = examplesDiv.getElementsByClassName("media");

// Start in the middle
scrollContainer.scrollLeft = 1 * services.offsetWidth;

nextBtn.addEventListener("click", () => {
  // Add the leftmost example to the very right
  const head = examples[0];
  const tail = examples[examples.length-1];
  tail.after(head);

  // Transition back to the previous example we were on before changing the
  // order
  scrollContainer.style.scrollBehavior = '';
  scrollContainer.style.transition = '';
  scrollContainer.scrollLeft -= services.offsetWidth;

  // Transition to the next example with a smooth transition
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.style.transition = 'transform 0.5s';
  scrollContainer.scrollLeft += services.offsetWidth;
});

// Go to the previous service example
backBtn.addEventListener("click", () => {

  // Add the rightmost example to the very left
  const head = examples[0];
  const tail = examples[examples.length-1];
  head.before(tail);

  // Transition back to the next example we were on before changing the order
  scrollContainer.style.scrollBehavior = '';
  scrollContainer.style.transition = '';
  scrollContainer.scrollLeft += services.offsetWidth;

  // Transition to the previous example with a smooth transition
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.style.transition = 'transform 0.5s';
  scrollContainer.scrollLeft -= services.offsetWidth;
});

// Adjust the position of the services gallery
window.addEventListener("resize", () => {
  scrollContainer.style.scrollBehavior = '';
  scrollContainer.style.transition = '';
  scrollContainer.scrollLeft = services.offsetWidth;
})
