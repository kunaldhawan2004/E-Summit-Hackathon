// script.js

function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    // Display the message (you would implement this functionality)
    displayMessage(message);

    // Clear the input field
    messageInput.value = "";
}

function displayMessage(message) {
    var chatMessages = document.querySelector(".chat-messages");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}
