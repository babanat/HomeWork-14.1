const sliderLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
const dots = document.querySelectorAll(".dot");
let position = 0;
let dotIndex = 0;

const visibleArrow = () => {
  if (dotIndex === dots.length - 1) {
    nextButton.style.opacity = "0.20";
  } else {
    nextButton.style.opacity = "1";
  }
  if (dotIndex === 0) {
    prevButton.style.opacity = "0.20";
  } else {
    prevButton.style.opacity = "1";
  }
};

const nextSlide = () => {
  if (position < (dots.length - 1) * 400) {
    position += 400;
    dotIndex++;
  }
  visibleArrow();
  //
  //   else { // вариант если нужно вернуть в начало
  //       position = 0;
  //       dotIndex = 0;
  //     }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
};
const prevSlide = () => {
  if (position > 0) {
    position -= 400;
    dotIndex--;
  }
  //  else { вариант если нужно вернуть в конец
  //   position = (dots.length -1) * 400;
  //   dotIndex = (dots.length -1)
  // }
  visibleArrow();
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
};
const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
};
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = 400 * index;
    sliderLine.style.left = -position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
  });
});
