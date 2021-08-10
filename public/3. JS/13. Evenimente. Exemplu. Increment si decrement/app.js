document.getElementById("decrementBtn").addEventListener("click", () => {
    const elementValue = document.getElementById("value").value;
    if(elementValue > 1){
        document.getElementById("value").value = elementValue - 1;
    } else{
        document.getElementById("value").value = 10;
    }
})

document.getElementById("incrementBtn").addEventListener("click", () => {
    const elementValue = Number(document.getElementById("value").value);
    if(elementValue < 10) {
        document.getElementById("value").value = elementValue + 1;
    } else {
        document.getElementById("value").value = 1;
    }
})