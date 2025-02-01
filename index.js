let digit = document.querySelector(".num").textContent;
console.log(Number(digit));
let button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("button clicked");
  digit = Number(digit) + 1;
  document.querySelector(".num").textContent = digit;
});
