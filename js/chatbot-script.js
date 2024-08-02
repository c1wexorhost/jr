// Existing JavaScript code...

// Define the CSS styles as a template string
const cssStyles = `
/* Paste your CSS styles from style.css here */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
.chatbot-toggler {
  position: fixed;
  right: 40px;
  bottom: 35px;
  height: 50px;
  width: 50px;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  background: #65b5e9;
  border-radius: 50%;
  transition: all 0.2s ease;
}
.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}

.chatbot-toggler span {
  position: absolute;
}

.show-chatbot .chatbot-toggler span:first-child,
.chatbot-toggler span:last-child {
  opacity: 0;
}

.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}

.chatbot {
  position: fixed;
  right: 40px;
  bottom: 100px;
  width: 420px;
  transform: scale(0.5);
  opacity: 0;
  z-index: 1500;
  pointer-events: none;
  overflow: hidden;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
}

.show-chatbot .chatbot {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}

.chatbot header {
  background: #65b5e9;
  padding: 16px 0;
  text-align: center;
  position: relative;
}

.chatbot header h2 {
  color: #fff;
  font-size: 1.4rem;
}

.chatbot header span {
  position: absolute;
  right: 20px;
  top: 50%;
  color: #fff;
  cursor: pointer;
  display: none;
  transform: translateY(-50%);
}

.chatbot .chatbox {
  height: 450px;
  overflow-y: auto;
  padding: 30px 20px 70px;
}

.chatbox .chat {
  display: flex;
}

.chatbox .incoming span {
  height: 32px;
  width: 32px;
  color: #fff;
  align-self: flex-end;
  background: #65b5e9;
  text-align: center;
  line-height: 32px;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}

.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}

.chatbox .chat p {
  padding: 12px 16px;
  max-width: 75%;
  white-space: pre-wrap;
  font-size: 0.95rem;
  border-radius: 10px 10px 0 10px;
  color: #fff;
  background: #65b5e9;
}

.chatbox .chat p.error {
  color: #721c72;
  background: #f8d7da;
}

.chatbox .incoming p {
  color: black;
  background: #f2f2f2;
  border-radius: 10px 10px 10px 0;
}

.chatbot .chat-input {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  gap: 5px;
  background: #fff;
  padding: 5px 20px;
  border-top: 1px solid #ccc;
}

.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  max-height: 180px;
  font-size: 0.95rem;
  resize: none;
  padding: 16px 15px 16px 0;
}

.chat-input span {
  align-self: flex-end;
  height: 55px;
  line-height: 55px;
  color: #65b5e9;
  font-size: 1.35rem;
  cursor: pointer;
  visibility: hidden;
}

.chat-input textarea:valid ~ span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot {
    right: 0;
    bottom: 0;
    width: 300px;
    height: 500px;
    border-radius: 0;
    padding-bottom: 150px;
    margin-right: 20px;
    border-top: 1px solid #ccc;
    border-radius: 10px 10px 10px 10px;
  }

  .chatbot .chatbox {
    height: 90%;
  }

  .chatbot header span {
    display: block;
  }

  .chatbox .incoming p {
    color: black;
    background: #f2f2f2;
  }
  .chat-input textarea {
    height: 55px;
    width: 100%;
    border: none;
    outline: none;
    max-height: 180px;
    font-size: 0.95rem;
    resize: none;
    padding: 16px 15px 16px 0;
  }
}

@media (max-width: 490px) {
  .chatbot {
    margin-bottom: 100px;
    border-top: 1px solid #ccc;
  }
}


/* Continue with the rest of your CSS styles... */
`;

// Create a <style> element and append the CSS styles to it
const styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.textContent = cssStyles;

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);

// Continue with the existing JavaScript code...


const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";
linkElement.type = "text/css";

// Append the <link> element to the <head> of the document
document.head.appendChild(linkElement);












chat(user_id){
  guser = user_id;
};







// // Call the buildChatbot function to create the chatbot HTML structure
// buildChatbot();
function buildChatbot() {
  // Create the chatbot container
  const chatbotContainer = document.createElement("div");
  chatbotContainer.classList.add("chatbot");

// Create the chatbot header
const chatbotHeader = document.createElement("header");
chatbotHeader.classList.add("m1");
chatbotHeader.innerHTML = `
  <div class="header-content">
    <img src="https://wexorai.com/WexorBlackDots.png" alt="WexorAI Logo" class="logo-image" style="width: 50px; height: 40px; display: inline-block; vertical-align: middle;">
    <h2 style="display: inline-block; vertical-align: middle; margin-left: 10px;">WexorAI</h2>
  </div>
  <span class="close-btn material-symbols-outlined"></span>
`;


  // Create the chatbox
  const chatbox = document.createElement("ul");
  chatbox.classList.add("chatbox");

  // Create the initial chat message
  const initialMessage = document.createElement("li");
  initialMessage.classList.add("chat", "incoming");
  initialMessage.innerHTML = `
    <span class="material-symbols-outlined">smart_toy</span>
    <p>Hi, there👋 How can I help you today?</p>
  `;

  // Create the chat input
  const chatInput = document.createElement("div");
  chatInput.classList.add("chat-input");
  chatInput.innerHTML = `
    <textarea placeholder="Enter a message...." required></textarea>
    <span id="send-btn" class="material-symbols-outlined">send</span>
  `;

  // Append the created elements to the chatbot container
  chatbotContainer.appendChild(chatbotHeader);
  chatbotContainer.appendChild(chatbox);
  chatbox.appendChild(initialMessage);
  chatbotContainer.appendChild(chatInput);

  // Add the chatbot container to the document body
  document.body.appendChild(chatbotContainer);
}

// Call the buildChatbot function to create the chatbot HTML structure
buildChatbot();
// html code end

const chatInput = document.querySelector(".chat-input textarea");
const sendChatbotBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `  <span class="material-symbols-outlined">smart_toy</span> <p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://chatbot.wexorai.com/chat";
  const messageElement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: guser,
      user_id: "abc1",
      chat: userMessage,
    }),
  };

  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      messageElement.textContent = data.response;
    })
    .catch((error) => {
      messageElement.classList.add("error");
      console.log(error);
      messageElement.textContent = "Oops! Something went wrong try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight} px`;

  createChatLi(userMessage, "outgoing");

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking....", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight} px`;
  chatInput.style.height = `${chatInput.scrollHeight} px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftkey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatbotBtn.addEventListener("click", handleChat);

chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
