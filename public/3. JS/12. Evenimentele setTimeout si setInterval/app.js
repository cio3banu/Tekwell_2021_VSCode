setTimeout(() => {
    alert("Page was loade 3 seconds ago");
}, 3000)

let i = 1;

let interval = setInterval(() => {
    document.write(" " + i);
    i++;
    if(i > 5){
        clearInterval(interval);
    }    
}, 1000);