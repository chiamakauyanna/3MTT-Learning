const buttonEl = document.querySelectorAll("button");
const textEl = document.querySelector("#text");

buttonEl.forEach((button) => {
  button.addEventListener("click", () => {
    value = button.innerHTML;

    if (value === "=") {
      try {
        textEl.innerHTML = eval(textEl.innerHTML);
      } catch {
        textEl.innerHTML = "Error";
      }
    } else if (value === "C") {
      textEl.innerHTML = "";
    } else {
      textEl.innerHTML += value;
    }
  });
});
