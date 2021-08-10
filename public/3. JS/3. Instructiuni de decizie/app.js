const nota = 4;

if(nota >= 5){
    console.log("Ati promovat examenul");
}else{
    console.log("Nu ati promovat examenul");
}


console.log("Cifra:");
const cifra = 10;
if(cifra === 0){
    console.log("Zero");
}else if(cifra === 1){
    console.log("Unu");
}else if(cifra === 2){
    console.log("Doi");
}else if(cifra === 3){
    console.log("Trei");
}else if(cifra === 4){
    console.log("Patru");
}else if(cifra === 5){
    console.log("Cinci");
}else if(cifra === 6){
    console.log("Sase");
}else if(cifra === 7){
    console.log("Sapte");
}else if(cifra === 8){
    console.log("Opt");
}else if(cifra === 9){
    console.log("Noua");
} else{
    console.log("Nu este cifra");
}

switch(cifra){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("Unu");
        break;
    case 2:
        console.log("Doi");
        break;
    case 3:
        console.log("Trei");
        break;
    case 4:
        console.log("Patru");
        break;
    case 5:
        console.log("Cinci");
        break;
    case 6:
        console.log("Sase");
        break;
    case 7:
        console.log("Sapte");
        break;
    case 8:
        console.log("Opt");
        break;
    case 9:
        console.log("Noua");
        break;
    default:
        console.log("Nu este cifra");
}