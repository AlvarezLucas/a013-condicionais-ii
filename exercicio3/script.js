//código a ser reescrito
/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

# Exercício 3

Reescreva os códigos do arquivo script.js utilizando o if ternário.

**Relembrando o if ternário**
```jsx
condição ? expr1 : expr2
```

Onde :

`condição` é uma expressão que é avaliada como `true` ou `false`.

`expr1`, `expr2` são xpressões com valores de qualquer tipo.
*/

const nome = prompt ("Qual e o seu nome?")

nome === "Jose" ? console.log("Oi, ze!") : console.log(`ola, ${nome}`)

const idade = Number(prompt("Qual e sua idade?"))

idade >= 18 ? console.log("Voce pode tirar a carteira de motorista") : console.log(" Voce nao pode tirar carta de motorista")