import React, { useState, useEffect } from "react";
import { Widget, addResponseMessage, setQuickButtons } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    addResponseMessage("Hola, ¿necesitas ayuda?");
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    if (newMessage === "Hola") {
      addResponseMessage("¡Hola! ¿En qué puedo ayudarte?");
    } else {
      addResponseMessage("Lo siento, no puedo entenderte en este momento.");
    }
  };

  const handleMessageSubmit = () => {
    if (input.trim() !== "") {
      const newMessage = {
        user: "user",
        text: input,
      };

      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">Icono de chat</div>
        <div className="chat-body">
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <span className="user">{message.user}: </span>
                <span className="text">{message.text}</span>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleMessageSubmit}>Enviar</button>
          </div>
        </div>
      </div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="ChatBot"
        subtitle="Asistente Virtual"
        senderPlaceHolder="Escribe un mensaje..."
        showTimeStamp={false}
        fullScreenMode={false}
      />
    </div>
  );
};

export default Chat;
