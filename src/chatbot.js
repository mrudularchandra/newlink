document.addEventListener("DOMContentLoaded", () => {
  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const chatMessages = document.getElementById("chat-messages");

  chatbotBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden");
  });

  const sendMessage = () => {
    const message = chatInput.value.trim();
    if (!message) return;

    const userMsg = document.createElement("div");
    userMsg.className = "bg-blue-100 text-blue-800 p-2 rounded-lg self-end w-max ml-auto";
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    chatInput.value = "";
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "bg-gray-200 text-gray-700 p-2 rounded-lg w-max";
      botMsg.textContent = "LinkBot is typing...";
      chatMessages.appendChild(botMsg);

      setTimeout(() => {
        botMsg.textContent = "Thanks for reaching out! 😊 Our team will get back to you shortly.";
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }, 500);
  };

  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
