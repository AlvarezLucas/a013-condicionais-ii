
const perguntaNacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();
/*
if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

*/

switch (perguntaNacionalidade) {
    case "brasileira":
        console.log("Voce e Brasileiro")
        break;
    case "argentina":
        console.log("Voce e Argentino")
        break;
    case "uruguaia":
        console.log("Voce e uruguaiu")      
        break;
     case "chilena":
        console.log("Voce e Chileno")
        break;
     case "colombiana":
        console.log("Voce e colombiano")
        break;

    default:
        console.log("Nacionalidade nao encontrada")
}