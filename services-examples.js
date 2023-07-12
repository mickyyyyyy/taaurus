// Controlling the height of the banner based on the location
let body = document.querySelector("html");
//let navigationButtons = document.querySelector(".nav-options");
let video = document.querySelector("video");
const bannerDefaultWidth = 1920;

// Adjusts the height of the banner as we move up and down the page
let portrait = document.querySelector("#portrait");
let landscape = document.querySelector('#landscape');
function reset_banner_height() {
  //if (window.screen.width >= window.screen.height) {
  landscape.style.top = `${body.scrollTop}px`;
  //} //else {
    //portrait.style.top = `${body.scrollTop}px`;
  //}
}

// Determines whether we retrieve the static image or the video
function determine_banner_media() {
  if (window.screen.width >= window.screen.height) {
    portrait.style.display = 'none';
    landscape.style.display = 'block';
  } else {
    portrait.style.display = 'block';
    landscape.style.display = 'none';
  }
}

// Refresh pulls the user back to the top of the website
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  body.scrollTop = 0;
};

// Zoom banner image to the middle (on mobiles)
window.addEventListener("load", () => {
  reset_banner_height();
  determine_banner_media();
});

// Adjusts the height of the banner when we scroll
window.addEventListener("scroll", () => {
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

const d = new Date();
let time = d.getTime();
const slideTime = 5000;

function nextExample() {
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
}

nextBtn.addEventListener("click", () => {
  nextExample();
  const newDate =  new Date();
  time = newDate.getTime();
});

function previousExample() {
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
}

// Go to the previous service example
backBtn.addEventListener("click", () => {
  previousExample();
  const newDate =  new Date();
  time = newDate.getTime();
});

console.log(time);
setInterval(() => {
  const newD = new Date();
  if (newD.getTime() >= time + slideTime) {
    nextExample();
    time = newD.getTime();
  }
}, 100);


window.addEventListener("resize", () => {
  // Adjust the position of the services gallery
  scrollContainer.style.scrollBehavior = '';
  scrollContainer.style.transition = '';
  scrollContainer.scrollLeft = services.offsetWidth;

  // Zoom banner image to the middle (on mobiles)
  reset_banner_height();
  determine_banner_media();
});
