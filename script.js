let currentLanguage = 'ru'; // Изначально русский язык

function toggleLanguage() {
    if (currentLanguage === 'ru') {
        currentLanguage = 'uz';

        // Изменяем текст для узбекского языка
        document.getElementById('store-title').innerText = 'Toshkent Dark Store';
        document.getElementById('operator').innerText = 'Operator';
        document.getElementById('about-us').innerText = 'Biz haqimizda';

        // Продукты
        document.getElementById('product1-name').innerText = 'Tovar 1';
        document.getElementById('product2-name').innerText = 'Tovar 2';
        document.getElementById('product3-name').innerText = 'Tovar 3';
        document.getElementById('product4-name').innerText = 'Tovar 4';

        // Кнопка "Подробнее"
        document.querySelectorAll('.product button').forEach(button => {
            button.innerText = 'Batafsil';
        });
    } else {
        currentLanguage = 'ru';

        // Изменяем текст обратно на русский
        document.getElementById('store-title').innerText = 'Toshkent Dark Store';
        document.getElementById('operator').innerText = 'Оператор';
        document.getElementById('about-us').innerText = 'О нас';

        // Продукты
        document.getElementById('product1-name').innerText = 'Товар 1';
        document.getElementById('product2-name').innerText = 'Товар 2';
        document.getElementById('product3-name').innerText = 'Товар 3';
        document.getElementById('product4-name').innerText = 'Товар 4';

        // Кнопка "Подробнее"
        document.querySelectorAll('.product button').forEach(button => {
            button.innerText = 'Подробнее';
        });
    }
}

// Переключение меню
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.left = menu.style.left === '0px' ? '-300px' : '0px';
}

// Закрытие меню
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.style.left = '-300px';
}

// Переключение темы
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
}
