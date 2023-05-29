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
