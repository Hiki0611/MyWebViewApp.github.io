document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.left = menu.style.left === '0px' ? '-300px' : '0px';
});

function closeMenu() {
    const menu = document.getElementById('menu');
    menu.style.left = '-300px';
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
        document.querySelectorAll('.product h3')[1].innerText = 'Tovar 2';
        document.querySelectorAll('.product h3')[2].innerText = 'Tovar 3';
        document.querySelectorAll('.product h3')[3].innerText = 'Tovar 4';
        document.querySelectorAll('.product h3')[4].innerText = 'Tovar 5';
        document.querySelectorAll('.product h3')[5].innerText = 'Tovar 6';
        document.querySelectorAll('.product h3')[6].innerText = 'Tovar 7';
        document.querySelectorAll('.product h3')[7].innerText = 'Tovar 8';
    } else {
        currentLanguage = 'ru';
        document.querySelector('h1').innerText = 'Toshkent Dark Store';
        document.getElementById('operator').innerText = 'Оператор';
        document.querySelectorAll('.product h3')[0].innerText = 'Товар 1';
        document.querySelectorAll('.product h3')[1].innerText = 'Товар 2';
        document.querySelectorAll('.product h3')[2].innerText = 'Товар 3';
        document.querySelectorAll('.product h3')[3].innerText = 'Товар 4';
        document.querySelectorAll('.product h3')[4].innerText = 'Товар 5';
        document.querySelectorAll('.product h3')[5].innerText = 'Товар 6';
        document.querySelectorAll('.product h3')[6].innerText = 'Товар 7';
        document.querySelectorAll('.product h3')[7].innerText = 'Товар 8';
    }
}

document.getElementById('about-us').addEventListener('click', function() {
    window.location.href = 'ССЫЛКА3';
});