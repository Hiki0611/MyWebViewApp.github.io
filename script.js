document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const themeButton = document.querySelector('.menu button');

  // Открытие/закрытие меню
  hamburger.addEventListener('click', () => {
    menu.style.left = menu.style.left === '0px' ? '-300px' : '0px';
  });

  // Переключение темы
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
