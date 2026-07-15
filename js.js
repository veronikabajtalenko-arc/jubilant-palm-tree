
function toggleAnswer(id) {
    // Отримуємо елемент за його унікальним ідентифікатором
    const answer = document.getElementById(id);

    // Перевіряємо умову: якщо стиль display дорівнює 'none' або ще не заданий у вбудованих стилях
    if (answer.style.display === 'none' || !answer.style.display) {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}