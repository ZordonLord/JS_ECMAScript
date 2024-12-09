// userService.js

async function getUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Пользователь с ID ${userId} не найден (код ошибки: ${response.status})`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error(`Ошибка при получении данных о пользователе: ${error.message}`);
    }
}