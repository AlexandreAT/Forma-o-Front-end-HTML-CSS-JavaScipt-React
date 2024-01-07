console.log("Teste log 2");

// Como o JS le cada coisa:
// Tipos de dados
console.log("Number:");
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -3);
console.log(10);

console.log("Operações aritméticas: ");
console.log(2 + 2);
console.log(7 - 3);
console.log(10 * 5);
console.log(8 / 4);

console.log("Special Numbers: ");
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

console.log("Strings: ");
console.log("Texto 1");
console.log('Texto 2');
console.log(typeof "texto 3");

console.log("Caracter especial:");
console.log("Quebra de linha \nquebra de linha aqui");
console.log("Efeito de tab \tefeito aqui");

console.log("Concatenação: ");
console.log("Unindo mais de um texto" + " união aqui");

console.log("Interpolação: ");
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log("Boolean");
console.log(true);
console.log(false);
console.log(20 > 30);
console.log(30 > 20);
console.log(typeof true);

console.log("Comparações");
console.log(5 <= 5);
console.log(5 < 2);
console.log(5 > 1);
console.log(10 == 10);
console.log(10 != 90);
// Aqui o js entende que o valor ambos são iguais, porém um é tipo number e o outro string:
console.log(9 == "9");
// Para previnir isso usamos o === e !===: 
console.log(9 === "9");
// A mesma coisa com o diferente
console.log(9 != "9");
console.log(9 !== "9");

console.log("Empty values");
console.log(typeof null);
console.log(typeof undefined);