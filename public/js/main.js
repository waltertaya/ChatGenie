const requestButton = document.getElementById('req-btn');
const userInput = document.getElementById('user-input');
const responseArea = document.getElementById('response-area');
const markdownContainer = document.querySelector('.chat-message');

requestButton.addEventListener('click', async () => {
    const value = userInput.value;
    userInput.value = '';
    responseArea.textContent = 'loading...';

    try {
        let url = `/api/?value=${encodeURIComponent(value)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.message) {
            responseArea.textContent = '';

            markdownContainer.innerHTML =   `<md-block> ${data.message} </md-block>`;
        } else {
            responseArea.textContent = 'Error occurred. Please try again.';
        }
    } catch (error) {
        console.error(error);
        responseArea.textContent = 'Error occurred. Please try again.';
    }
});
