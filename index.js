
let digit = document.querySelector(".num").textContent;
console.log(Number(digit));
let button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("button clicked");
  digit = Number(digit) + 1;

  console.log(digit);


  document.querySelector(".num").textContent = digit;
});

const h_1 = document.querySelector(".h1");
let isBoring = true;
document.querySelector(".btn").addEventListener("click", function () {

  if (isBoring) {
    h_1.innerHTML = "This is very exciting day😊";
  } else {
    h_1.innerHTML = "This is very boring day😒";
  }
  isBoring = !isBoring;
});

    if (isBoring) {
        h_1.innerHTML = "This is very exciting day😊";
    } else {
        h_1.innerHTML = "This is very boring day😒";
    }
    isBoring = !isBoring;
});


