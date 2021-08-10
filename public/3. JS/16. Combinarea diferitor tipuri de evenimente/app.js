document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = 'yellow';
});

setTimeout(() => {
    document.body.style.backgroundColor = 'green';
}, 3000);


const colors = ["red", "green", "blue", "orange", "cyan", "violet", "pink"];

let colorIndex = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    if(colorIndex < colors.length){
        colorIndex++;
    } else {
        colorIndex = 0;
    }
    
}, 100);


//homework.
//facem ca elementele sa se miste in diferite parti, sa isi schimbe marimea aleatoriu