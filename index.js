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