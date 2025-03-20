import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (!inputText.trim()) return; // Prevent sending empty messages

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText(""); // Clear input field after sending
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents default behavior like form submission
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleKeyPress}
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}