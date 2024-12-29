document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('closed');
});

function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.add('closed');
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}

let currentLanguage = 'ru';
function toggleLanguage() {
    if (currentLanguage === 'ru') {
        currentLanguage = 'uz';
        document.querySelector('h1').innerText = 'Toshkent Dark Store';
        document.getElementById('operator').innerText = 'Operator';
        document.querySelectorAll('.product h3')[0].innerText = 'Tovar 1';