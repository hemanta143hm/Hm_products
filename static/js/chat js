// Simple chat functionality
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
    const message = chatInput.value;
    if (message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatInput.value = "";
    }
});
