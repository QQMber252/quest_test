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
const userList = document.getElementById('user-list');
const continueBtn = document.getElementById('continue-btn');
const selectedCharacter = document.getElementById('selected-character');

// Генерация списка пользователей
users.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'user-item';
    listItem.textContent = `${index + 1}. ${user}`;
    listItem.addEventListener('click', () => selectUser(user));
    userList.appendChild(listItem);
});

// Выбор пользователя
let selectedUser = null;

function selectUser(user) {
    if (selectedUser) {
        document.querySelector('.user-item.selected').classList.remove('selected');
    }
    selectedUser = user;
    document.querySelector(`li:contains("${user}")`).classList.add('selected');
    continueBtn.disabled = false;
}

// Продолжить игру
continueBtn.addEventListener('click', () => {
    if (selectedUser) {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        selectedCharacter.textContent = selectedUser;
    }
});
