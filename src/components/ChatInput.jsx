import { useState } from "react";
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

    const response = (input) => {
      const lower = input.toLowerCase();
  
      if (lower.includes('date')) {
        return `Today's date is ${new Date().toLocaleDateString()}`;
      } else if (lower.includes('coin')) {
        return Math.random() < 0.5 ? 'You got heads!' : 'You got tails!';
      } else if (lower.includes('dice') || lower.includes('die')) {
        return `You rolled a ${Math.floor(Math.random() * 6) + 1}`;
      }else if (lower.includes('thank')) {
        return 'No problem! Let me know if you need help with anything else!';
      }else if (lower.includes('hi')||lower.includes('hello')) {
        return 'Hello! How can I help you?';
      } else {
        return "Sorry, I didn't quite understand that." + 
                "Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!";
      }
    };


    setTimeout(() => {
        setChatMessages([
        ...newChatMessages,
        {
          message: response(inputText),
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);

    }, 1000);
    

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