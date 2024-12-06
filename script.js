const reviewsList = document.querySelector(".reviews__list");
let reviews = document.querySelectorAll(".review");

const blockWidth = 400 + 20;
let isTransitioning = false;

function updateBlur() {
  reviews.forEach((review, index) => {
    if (index === 1 || index === 2 || index === 3) {
      review.classList.remove("blur");
    } else {
      review.classList.add("blur");
    }
  });
}

function shiftElement(direction) {
  if (direction === "left") {
    const lastElement = reviewsList.lastElementChild;
    reviewsList.prepend(lastElement);
  } else if (direction === "right") {
    const firstElement = reviewsList.firstElementChild;
    reviewsList.append(firstElement);
  }

  reviews = document.querySelectorAll(".review");
  updateBlur();

  reviewsList.style.transition = "none";
  reviewsList.style.transform = `translateX(-${blockWidth}px)`;
}

reviewsList.style.transform = `translateX(-${blockWidth}px)`;

function scroll(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  updateBlur();

  const offset = direction === "left" ? 0 : -2 * blockWidth;

  reviewsList.style.transition = "transform 0.6s ease";
  reviewsList.style.transform = `translateX(${offset}px)`;

  reviewsList.addEventListener(
    "transitionend",
    () => {
      if (direction === "left") {
        shiftElement("left");
      } else {
        shiftElement("right");
      }
      isTransitioning = false;

      updateBlur();
    },
    { once: true }
  );
}

document.querySelector(".left-arrow").addEventListener("click", () => {
  scroll("left");
});
document.querySelector(".right-arrow").addEventListener("click", () => {
  scroll("right");
});

let autoScrollInterval = setInterval(() => {
  scroll("right");
}, 2500);

reviewsList.addEventListener("mouseover", () =>
  clearInterval(autoScrollInterval)
);
reviewsList.addEventListener("mouseout", () => {
  autoScrollInterval = setInterval(() => {
    scroll("right");
  }, 2500);
});

updateBlur();

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".sign").style.display = "none";
});
