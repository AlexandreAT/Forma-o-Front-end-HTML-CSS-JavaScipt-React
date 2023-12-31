const darkIcon = document.getElementById('style-dark');
const lightIcon = document.getElementById('style-light');
const neonIcon = document.getElementById('style-neon')
const style = document.querySelector("body");

darkIcon.addEventListener('click', () => {
    style.classList.remove('neon');
    style.classList.add('dark');
});

neonIcon.addEventListener('click', () => {
    style.classList.remove('dark');
    style.classList.add('neon');
})

lightIcon.addEventListener('click', () => {
    style.classList.remove('dark');
    style.classList.remove('neon');
})