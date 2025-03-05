// Список пользователей
const users = [
    "Анастасия Бобылёва",
    "Светлана Мытарева",
    "Анна Бобылева",
    "Анна Хазиева",
    "Вероника Семяшова",
    "Варвара Маслова",
    "Екатерина Селиванова",
    "Раиса Гончарова",
    "Валерия Цвик",
    "Яна Кузнецова",
    "Юлия Лукьянова",
    "Мария Маризоева",
    "Дарья Сергеева",
    "Марина Шарапова",
    "Еремина Олеся",
    "Татьяна Казиева",
    "Анастасия Белецкая",
    "Екатерина Шахватова"
];

// Элементы DOM
const userGrid = document.getElementById('user-grid');
const continueBtn = document.getElementById('continue-btn');
const selectedCharacter = document.getElementById('selected-character');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');

// Генерация плиток пользователей
users.forEach((user, index) => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.textContent = `${index + 1}. ${user}`;
    card.addEventListener('click', () => selectUser(card, user));
    userGrid.appendChild(card);
});

// Выбор пользователя
let selectedUser = null;

function selectUser(selectedCard, user) {
    // Убираем выделение у предыдущего выбранного элемента
    if (selectedUser) {
        document.querySelector('.user-card.selected')?.classList.remove('selected');
    }

    // Выделяем новый выбранный элемент
    selectedCard.classList.add('selected');
    selectedUser = user;

    // Активируем кнопку "Продолжить"
    continueBtn.disabled = false;
}

// Продолжить игру
continueBtn.addEventListener('click', () => {
    if (selectedUser) {
        // Скрываем стартовую страницу
        startScreen.classList.remove('visible');
        setTimeout(() => {
            startScreen.classList.add('hidden'); // После анимации скрываем полностью
        }, 500);

        // Показываем страницу игры
        gameScreen.classList.remove('hidden');
        setTimeout(() => {
            gameScreen.classList.add('visible'); // После появления делаем видимым
        }, 100);

        // Отображаем выбранное имя
        selectedCharacter.textContent = selectedUser;
    }
});

// Инициализация: показываем начальную страницу
startScreen.classList.add('visible');
