document.getElementById("minusBtn").addEventListener("click", () => {
    document.querySelectorAll(".element").forEach(element => {
        element.style.width = (element.clientWidth - 5) + "px";
        element.style.height = (element.clientHeight - 5) + "px";
    })
});

document.getElementById("plusBtn").addEventListener("click", () => {
    document.querySelectorAll(".element").forEach(element => {
        element.style.width = (element.clientWidth + 5) + "px";
        element.style.height = (element.clientHeight + 5) + "px";
    })
});