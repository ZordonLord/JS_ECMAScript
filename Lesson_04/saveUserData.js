// saveUserData.js
async function saveUserData(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Данные успешно отправлены:', data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
    }
}
