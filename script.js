const socket = new WebSocket('ws://localhost:3000'); // Connect to WebSocket server

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatBox = document.querySelector('.chat-box');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        socket.send(messageText); // Send message to server

        messageInput.value = '';
    }
});

socket.addEventListener('message', (event) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'received');
    messageDiv.innerHTML = `<p>${event.data}</p>`;
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
});
