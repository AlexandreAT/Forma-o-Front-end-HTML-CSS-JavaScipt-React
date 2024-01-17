// Ler mais
function readMore(link) {
    var paragraph = link.parentNode; // Obtém o parágrafo pai do link clicado
    var ellipsis = paragraph.querySelector(".ellipsis");
    var moreText = paragraph.querySelector(".moreText");

    if (moreText.classList.contains("hidden")) {
        ellipsis.style.display = "none";
        moreText.classList.remove("hidden");
        link.innerText = "Ler menos";
    } else {
        ellipsis.style.display = "inline";
        moreText.classList.add("hidden");
        link.innerText = "Ler mais";
    }
}

// Filtros
var filterLinks = document.querySelectorAll('.filter-link');

filterLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        var filtroSelecionado = link.getAttribute('data-filter');

        var cidades = document.querySelectorAll('.city');
        cidades.forEach(function(cidade) {
            var filtros = cidade.getAttribute('data-filter').split(' ');
            if (filtros.includes(filtroSelecionado)) {
                cidade.style.display = 'block';
            } else {
                cidade.style.display = 'none';
            }
        });
    });
});

// Botão para remover filtro
var removeFilterBtn = document.getElementById('remove-filter');

removeFilterBtn.addEventListener('click', function() {
    var cidades = document.querySelectorAll('.city');
    cidades.forEach(function(cidade) {
        cidade.style.display = 'block';
    });
});

// Busca
function search(){
    let input = document.getElementById('search-content').value;
    let city = document.getElementsByClassName('city');
    input = input.toLowerCase();

    for(i = 0; i < city.length; i++){
        if(!city[i].innerHTML.toLowerCase().includes(input)){
            city[i].style.display = "none";
        }
        else{
            city[i].style.display = "block"
        }
    }

}

// Lazy loading
const images = document.querySelectorAll(".img-container img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return
        }
        const image = entry.target;
        image.src = image.src.replace("?w=10&", "?w=500&");
        
        observer.unobserve(image);
    })
}, {})

images.forEach((image) => {
    observer.observe(image);
});