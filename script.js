const btn = document.querySelector("button");
const con1 = document.querySelector(".container-1");
const con2 = document.querySelector(".container-2");
const rates = document.querySelectorAll("li");
const span = document.querySelector("span");

rates.forEach(function(rate) {
    rate.addEventListener("click", function() {
        const selectedNum = rate.innerHTML

        span.innerHTML = selectedNum;
    });
});

btn.addEventListener("click", function() {
    if (span.innerHTML !== "") {
        con1.classList.add("close");
        con2.classList.add("open");
    }
});
