const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNum = 1;
const length = images.length;

// bottom

for (let i = 0; i < length; i++) {
  let div = document.createElement("div");
  // adding div to the bottom
  bottom.appendChild(div);
  div.className = "button";
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.background =
  "linear-gradient(to top, rgb(2, 29, 33), cornsilk)";

// reset button
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.background = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    slider.style.transform = `translateX(-${i * 800}px)`;
    resetBg();
    slideNum = i + 1;
    button.style.background =
      "linear-gradient(to top, rgb(2, 29, 33), cornsilk)";
  });
});

// fun for next slide
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNum * 800}px)`;
  slideNum++;
};

// fun for prev slide
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNum - 2) * 800}px)`;
  slideNum--;
};

// fun for getting first slide
const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNum = 1;
};

// fun for getting last slide
const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNum = length;
};

// event listener on right
right.addEventListener("click", () => {
  slideNum < length ? nextSlide() : firstSlide();
  resetBg();
  buttons[slideNum - 1].style.background =
    "linear-gradient(to top, rgb(2, 29, 33), cornsilk)";
});

// event listener on left
left.addEventListener("click", () => {
  slideNum > 1 ? prevSlide() : lastSlide();
  resetBg();
  buttons[slideNum - 1].style.background =
    "linear-gradient(to top, rgb(2, 29, 33), cornsilk)";
});
