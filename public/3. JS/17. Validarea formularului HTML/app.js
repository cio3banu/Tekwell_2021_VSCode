document.getElementById("saveData").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");

    if(nameInput.value !== ""){
        document.getElementById("console").style.display = 'block';
        document.getElementById("name").innerHTML = nameInput.value;
        document.getElementById("age").innerHTML = ageInput.value;
        nameInput.style.border = 'none';

        if(ageInput.value < 5 || ageInput.value > 15){
            document.getElementById("console").style.display = 'block';
            document.getElementById("console").innerHTML = 'Acces doar pentru persoane cu virsta [5, 15] ani'
        }
    } else {
        nameInput.style.border = '1px solid red';
    }

    

  
})