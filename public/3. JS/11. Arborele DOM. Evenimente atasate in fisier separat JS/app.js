document.addEventListener("DOMContentLoaded", () => {
    alert("Document loaded");
})


document.getElementById("hoverButton").addEventListener("mouseenter", () => {
    alert("Button hover");
});

document.querySelectorAll(".clickButton").forEach(button => {
    button.addEventListener("click", () => {
        alert("Button cliked");
    });
})