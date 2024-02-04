const firstName = "Alexandre";
const anotherName = 1;
const a = true;

function greeting(name: string){
    console.log("Olá "+name);
}

greeting(firstName);

// Tipo: number
// declarando o tipo de uma variável
let x: number = 10

console.log("Número: "+x);
console.log("Tipo: "+typeof x);
// errado - x = "teste";

let y: number = 15.865465;
console.log("Número: "+y);
console.log("Tipo: "+typeof y);

console.log("Mudando a precisão de y: "+y.toPrecision(3));
// errado - console.log(y.toUpperCase());


// Tipo: string
const nameA: string = "Alexandre";

console.log("Nome: "+nameA.toUpperCase());

let fullName: string;
const lastName: string = "Arribamar";

fullName = nameA + " " + lastName;
console.log("Nome completo: "+fullName);
console.log("Tipo: "+typeof fullName);


// Tipo: boolean
let A: boolean = false;

console.log("Teste boolean: "+A);
console.log("Tipo: "+typeof A);


// inference e annotation
const ann: string = "Teste";

let inf = "Teste"
// errado - inf = 1;

console.log("Tipo (inference): "+ typeof inf);


// Arrays
let numbers: number[] = [1, 2, 3];
// errado - let numbers2: number[] = [1, 2, 3, "teste"];

numbers.push(5);
// errado - numbers.push(true);

console.log("Número do array: "+ numbers[2]);
// errado - numbers = "teste";

const nomes: string[] = ["Alexandre", "Paulo"];
// errado - nomes.push(5);


// Outa sintaxe array
const nums: Array<number> = [100, 200, 300];
// errado - const nums: Array<number> = [100, 200, 300, "A"];


// any
const arr1: any = [1, "teste", true, [], {nome: "Alexandre"}];


// Parâmetros de funções
function soma(a: number, b: number){
    console.log("Soma de parâmetros: "+ (a + b));
}
soma(4, 5);
// errado - soma("a", "b");

// Retorno de funções
function greetingName(name: string): string {
    return "Olá" + name;
}
console.log(greeting("Alexandre"));
// errado - console.log(greeting(123));


// Função anônima
setTimeout(function () {

    const sallary: number = 1000;

    // errado - console.log(parseFloat(sallary));
    // certo - console.log("Salário: "+sallary);
    

}, 2000)


// Tipos de objetos
function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates:"+coord.x);
    console.log("Y coordinates:"+coord.y);
}

const objCoord = {x: 329, y:84.2}
passCoordinates(objCoord);
// errado - passCoordinates(1, 2);


// Propriedades opcionais
function showNumbers(a: number, b: number, c?:number){
    console.log("A: "+a);
    console.log("B: "+b);
    if(c){
        console.log("C: "+c);
    }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);
// errado - showNumbers(6);
// Validando uma propriedade opcional
function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return "Olá "+firstName+" "+lastName;
    }

    return "Olá "+firstName;
}

console.log(advancedGreeting("Alexandre", "Arribamar"));
console.log(advancedGreeting("Kaio"));


// Union type
function showBalance(balance: string | number){
    console.log("O saldo da conta é: "+balance);
}

showBalance(100);
showBalance("500");
// errado - showBalance(true);
// Condicionais em union type
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado";
    }
    return "A função do usuário é: "+role;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));


// type alias
type ID = string | number;

function showId(id: ID){
    console.log("O ID é: "+id);
}

showId(1);
showId("200");
showId(123);


// Interface
interface Point{
    x: number
    y: number
    z: number
}

function showCoord(obj: Point){
    console.log("X: "+obj.x+" Y: "+obj.y+" Z: "+obj.z);
}

const coordObj:Point = {
    x: 100,
    y: 200,
    z: 300
}
showCoord(coordObj);


// interface X type alias
interface Person{
    name: string
}

// Adicionando outra propriedade para a interface
interface Person{
    age: number
}

const somePerson:Person = {
    name: "Alexandre",
    age: 22
}
console.log(somePerson);

type personType = {
    name: string
}
// errado - type personType = {
//     age: number
// }


// literal types
let test: "literal types: testando"
test = "literal types: testando"
console.log(test);

function showDirection(direction: "left" | "right" | "center"){
    console.log("A direção é: "+ direction);
}

showDirection("left");
// errado - showDirection("top");


// Non-null Assertion Operator
const p = document.getElementById("some-p");

console.log(p!.innerText);


// Bigint
let n: bigint

// errado - n = 1
n = 1000n;

console.log("Valor (bigint): ");
console.log(n);
console.log("Tipo: "+typeof n);


// Symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);


// 