document.addEventListener("DOMContentLoaded", () => {
  let display = document.querySelector(".display p");
  let btnContainer = document.querySelector(".btn-container");

  let arr = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
      "+", "-", "*", "/", "00", "=", "%", "c", "✖"
  ];

  function createButtons() {
      btnContainer.innerHTML = arr.map((item) =>
          `<button class="button">${item}</button>`
      ).join("");
  }

  createButtons();

  let buttons = document.querySelectorAll(".button");

  buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
          let c = btn.innerText;
          if (c === "c") {
              display.innerText = "";
          } else if (c === "✖") {
              display.innerText = display.innerText.slice(0, -1);
          } else if (c === "=") {
              try {
                  display.innerText = eval(display.innerText);
              } catch {
                  display.innerText = "Error";
              }
          } else {
              display.innerText += c;
          }
      });
  });
});
