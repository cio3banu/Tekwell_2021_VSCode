document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("name")){
    document.getElementById("personName").innerHTML = localStorage.getItem("name");
  } else {
    document.getElementById("personName").innerHTML = "nu este indicat numele";
  }
  
  if(localStorage.getItem("age")){
    document.getElementById("personAge").innerHTML = localStorage.getItem("age");
  } else {
    document.getElementById("personAge").innerHTML = "virsta nu este indicata";
  }
  
});

document.getElementById("savePersonData").addEventListener("click", () => {
  document.getElementById("personName").innerHTML = document.getElementById("name").value;
  document.getElementById("personAge").innerHTML = document.getElementById("age").value;


  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("age", document.getElementById("age").value);
});