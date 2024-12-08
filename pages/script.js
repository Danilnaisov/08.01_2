document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".sign").style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const miniatureImages = document.querySelectorAll(".miniature img");
  const mainImage = document.querySelector(".main-image");

  miniatureImages.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Изменение главной картинки
      mainImage.src = thumbnail.src;

      // Удаление активного класса у всех миниатюр
      miniatureImages.forEach((img) =>
        img.classList.remove("miniature__active")
      );

      // Добавление активного класса к выбранной миниатюре
      thumbnail.classList.add("miniature__active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Логика выбора цвета
  const colors = document.querySelectorAll(".chooses span");
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      // Удаление активного класса у всех цветов
      colors.forEach((c) => c.classList.remove("color__active"));

      // Добавление активного класса к выбранному цвету
      color.classList.add("color__active");
    });
  });

  // Логика выбора размера
  const sizes = document.querySelectorAll(".chooses .size");
  sizes.forEach((size) => {
    size.addEventListener("click", () => {
      // Удаление активного класса у всех размеров
      sizes.forEach((s) => s.classList.remove("size__active"));

      // Добавление активного класса к выбранному размеру
      size.classList.add("size__active");
    });
  });

  // Логика счётчика количества товара
  const minusButton = document.getElementById("minusBttn");
  const plusButton = document.getElementById("plusBttn");
  const amountText = document.getElementById("amount");

  minusButton.addEventListener("click", () => {
    let currentAmount = parseInt(amountText.textContent, 10);
    if (currentAmount > 1) {
      amountText.textContent = currentAmount - 1;
    }
  });

  plusButton.addEventListener("click", () => {
    let currentAmount = parseInt(amountText.textContent, 10);
    amountText.textContent = currentAmount + 1;
  });
});
