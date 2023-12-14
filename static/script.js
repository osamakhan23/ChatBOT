document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        sendMessage();
    }
});

document.getElementById('send-button').addEventListener('click', sendMessage);

async function sendMessage() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value.trim();

    if (message) {
        addMessageToDisplay('user', message);
        messageInput.value = '';

        // Send message to backend and receive response
        try {
            let response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.json();
            addMessageToDisplay('bot', data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

function addMessageToDisplay(sender, message) {
    let messageContainer = document.getElementById('message-container');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    messageContainer.appendChild(messageDiv);

    messageContainer.scrollTop = messageContainer.scrollHeight;
}

