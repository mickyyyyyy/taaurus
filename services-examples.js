let scrollContainer = document.querySelector(".example-wrapper");
let backBtn = document.getElementById("back-button");
let nextBtn = document.getElementById("forward-button");
const services = document.getElementById("services-examples");
//const rect = services.getBoundingClientRect();

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += services.offsetWidth;// rect.width;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= services.offsetWidth;//rect.width;
})
