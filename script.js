let display = document.getElementById("inputBox");
let buttons = document.getElementsByClassName("btn");
let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    if (e.target.value == "Del") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.value == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.value == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.value;
      display.value = string;
    }
  });
});
