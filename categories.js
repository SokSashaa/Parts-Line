const arrayCategories = [
    [0, 'Оригинальные запчасти'],
    [1, 'Не оригинальные запчасти'],
    [2, 'Запчасти для ТО'],
    [3, 'Автомасла и автохимия'],
    [4, 'Аккумуляторы'],
    [5, 'Для спецтехники'],
    [6, 'Автокосметика']
]

const category = document.querySelectorAll('.btn-circle-cat');
// category.item.addEventListener('click', () => {
//     location.href = 'menu.html';
// });

category.forEach(element => {
    element.addEventListener('click', () => {
        location.href = 'menu.html';
    });
});