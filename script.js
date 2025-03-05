// Правильные ответы
const correctAnswers = {
    1: "Hello World",
    2: "PYR4M1D", // Замените на реальный код из YouTube-видео
    3: "105"
};

// Глобальные переменные
let answers = {};
let finalCode = "";

// Проверка ответа
function checkAnswer(taskNumber) {
    const answerInput = document.getElementById(`answer${taskNumber}`);
    const userAnswer = answerInput.value.trim();

    if (userAnswer === correctAnswers[taskNumber]) {
        alert("Правильно!");
        answers[taskNumber] = userAnswer;

        // Показываем следующее задание или финальное сообщение
        const currentTask = document.getElementById(`task${taskNumber}`);
        currentTask.classList.add("hidden");

        if (taskNumber < 3) {
            document.getElementById(`task${taskNumber + 1}`).classList.remove("hidden");
        } else {
            // Формируем финальный код
            finalCode = Object.values(answers).join("");
            document.getElementById("final-code").textContent = finalCode;
            document.getElementById("final-message").classList.remove("hidden");
        }
    } else {
        alert("Неправильно. Попробуйте снова.");
    }
}