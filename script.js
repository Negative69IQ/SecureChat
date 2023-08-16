const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatBox = document.querySelector('.chat-box');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.innerHTML = `<p>${messageText}</p>`;
        chatBox.appendChild(messageDiv);

        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
    }
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendButton.click();
    }
});
