let display = document.getElementById("output-value");
let buttons = Array.from(document.getElementsByClassName("number"));
let history = document.getElementById("history-value");

buttons.map(function (ele, index, array) {
  ele.addEventListener("click", function (ele, index, array) {
    // console.log(ele.target.innerText);
    switch (ele.target.innerText) {
      case "C":
        display.innerText = "";
        history.innerText = "";
        break;
      case "CE":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!!!";
        }

        break;
      default:
        display.innerText = display.innerText + ele.target.innerText;
        history.innerText = eval(display.innerText);
    }
  });
});
