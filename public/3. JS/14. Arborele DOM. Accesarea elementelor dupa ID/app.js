//la apasarea butonului cu id = button
document.getElementById("button").onclick = () => {
    //verificam daca exista elementul unde vom afisa mesajul
    if(document.getElementById("console1") !== null){
        //afisam mesajul
        document.getElementById("console1").innerHTML = "A fost apasat butonul";
    }else{
        //afisam mesaj de eroare
        alert("Elementul console1 nu exista");
    }
};