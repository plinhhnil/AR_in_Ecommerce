import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Nhaminh. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    
    const query = input.toLowerCase();
    let botResponse = "I'm a simple bot. You can ask me about our products like sofa, lamp, bed, or table!";

    if (query.includes("sofa")) {
      botResponse = "We have beautiful modern and vintage sofas starting at ₹29167. Check out our Sofas category!";
    } else if (query.includes("lamp")) {
      botResponse = "Our table and floor lamps are perfect to brighten your room, starting at ₹3297.";
    } else if (query.includes("bed")) {
      botResponse = "We offer comfortable beds from Queen to King size, starting at ₹23297. Browse our Beds category for details.";
    } else if (query.includes("table")) {
      botResponse = "Looking for a dining or coffee table? We have great options starting at ₹6597.";
    } else if (query.includes("hi") || query.includes("hello")) {
      botResponse = "Hi there! How can I assist you with your furniture needs today?";
    } else if (query.includes("price") || query.includes("cost") || query.includes("how much")) {
      botResponse = "Prices vary by product. Please browse our categories for specific pricing, or tell me which product you are looking for.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Nhaminh Chat</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input 
              type="text" 
              placeholder="Ask about our products..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
