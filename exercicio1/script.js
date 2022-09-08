// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3

let num = Number (prompt("Digite seu numero aqui")) 

if (num % 2 === 0){
    if (num % 3 === 0){
        console.log("Seu numero e divisivel por 2 e 3")
    } else {
        console.log("Seu numero e divisivel por 2 mas nao e divisivel por 3")
    }
} else {
    if (num % 3 ===0){
        console.log("Seu numero e divisivel por 3 mas nao por 2")
    } else {
        console.log("seu numero nao e divisivel por 2 e nem por 3")
    }
}

/*
// 2. Utilizando um operador lógico para unir duas operações relacionais

if(num % 2 === 0 || num % 3 === 0){
    console.log("o numero e divisivel por 2 ou por 3")
} else {
    console.log("O numero nao e divisivel por 2 ou por 3")
}
*/
