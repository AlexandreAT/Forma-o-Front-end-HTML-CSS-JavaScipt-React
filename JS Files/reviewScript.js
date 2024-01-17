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

// Estruturas de programação
let name = "Alexandre";
console.log(name);
name = "Ana";
console.log(name);

// const = constante. A variavel const não pode ter seu valor alterado.
const x = 10;
console.log(x);
// Aqui por exemplo da erro:
// x = 20;
// console.log(x);

// const teste = prompt("teste: ");
// console.log(teste);

// alert("testando");

console.error("Teste erro");
console.warn("Teste aviso");

const user = "João";
if(user === "João"){
    console.log("Teste if");
}

const user2 = "Lucas";
if(user2 === "Ana"){
    console.log("Teste errado");
}
else{
    console.log("Teste else");
}

const user3 = "Guilherme";
if(user3 === "João"){
    console.log("Teste 1");
}
else if(user3 === "Ana"){
    console.log("Teste 2");
}
else if(user3 === "Alexandre"){
    console.log("Teste 3");
}
else if(user3 === "Guilherme"){
    console.log("Teste 4");
}
else{
    console.log("Usuário não encontrado!");
}

// let num = 1;
// while(num < 10){
//     console.log("Número: "+ num);
//     num++;
// }

// let cont = 1;
// do {
//     console.log("Número: "+ cont)
//     cont++;
// } while (cont !== 8);

// for(let i = 1; i < 5; i++){
//     console.log("Número: "+ i);
// }

const arrowFunction = () => {
    console.log("Essa é uma arrow function");
}
arrowFunction();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("É par!");
        return;
    }
    console.log("É impar!");
}
parOuImpar(10);

// DOM
//Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// selecionando elementos
const listItens = document.getElementsByTagName("li");
console.log(listItens);

const title = document.getElementById("title");
console.log(title);

const products = document.getElementsByClassName("product");
console.log(products);

const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const divMain = document.querySelector("#main-container");
console.log(divMain);

// Alterando o HTML
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);

const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

const footer = document.querySelector("footer");
const h5 = document.querySelector("#footer-text");
const h4 = document.createElement("h4");
h4.textContent = "Meu novo rodapé!";
footer.replaceChild(h4, h5);

const myText = document.createTextNode("Texto que será inserido");
const h3 = document.createElement("h3");
h3.appendChild(myText);
divMain.appendChild(h3); 

const firstLink = navLinks.querySelector("a");
firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"));

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

const product1 = products[0];
console.log(product1.getBoundingClientRect());

divMain.style.backgroundColor = "#222";
divMain.style.paddingBottom = "25px";

for(const li of listItens){
    li.style.backgroundColor = "black";
}

// Eventos
const btn = document.querySelector("#my-button");
btn.addEventListener("click", function(){ 
    console.log("Clicou no botão!"); 
})

const secondBtn = document.querySelector("#btn");
function imprimirMensagem(){
    console.log("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);
const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

const btnTitle = document.querySelector("#btn-title");
btnTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

const containerBtn = document.querySelector(".btn-container");
const btnInsideContainer = document.querySelector("#div-btn");
containerBtn.addEventListener("click", () => {
    console.log("Evento do elemento pai");
})
btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Evento do elemento filho");
})

const linkYt = document.querySelector("#link-yt");
linkYt.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a página!");
})

// document.addEventListener("keyup", (event) => {
//     console.log("Soltou a tecla: "+ event.key);
// })
// document.addEventListener("keydown", (event) => {
//     console.log("Pressionou a tecla: "+ event.key);
// })

// document.addEventListener("mousemove", (event) => {
//     console.log("Ponteito do mouse no eixo X: "+ event.x);
//     console.log("Ponteito do mouse no eixo Y: "+ event.y);
// })

// window.addEventListener("scroll", (event) => {
//     if(window.scrollY > 3000){
//         console.log("Passamos de 3000px");
//     }
// })

const input = document.querySelector("#my-input")
input.addEventListener("focus", (event) => {
    console.log("Entrou no input");
})
input.addEventListener("blur", (event) => {
    console.log("Saiu do input");
})

window.addEventListener("load", () => {
    console.log("A página carregou!");
})
// window.addEventListener("beforeunload", (event) => {
//     event.preventDefault();
//     event.returnValue();
// })

const debounce = (f, delay) => {
    let timeout;
    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};
window.addEventListener("mousemove", debounce(() => {
        console.log("Executando a cada 400ms"); 
    }, 400)
);

// AXIOS
// GET - Buscando dados
console.log("Axios");
const getData = async () => {
    try{

        const response = await postFetch.get(
            "/users",
            // HEADERS
            {
                headers:{
                    custom: "header",
                },
            }
        );

        console.log(response);
        return response.data;
        
    } catch(error){
        console.log(error);
    };
};
getData();

// Imprimindo os dados na tela
const container = document.querySelector("#user-container");

const printData = async() => {
    const data = await getData();
    
    data.forEach((user) => {
        const div = document.createElement("div");
        const name = document.createElement("h3");
        name.textContent = user.name;
        div.appendChild(name);
        container.appendChild(div);

        const email = document.createElement("p");
        email.textContent = user.email;
        div.appendChild(email);
    });
};
printData();

// POST - Enviando dados
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title-input")
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    postFetch.post("/posts", {
        title: titleInput.value, 
        body: bodyInput.value, 
        userId: 1,
    })
});