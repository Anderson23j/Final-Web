import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Chat = () => {
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
