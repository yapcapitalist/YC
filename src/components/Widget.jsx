import React, { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react"; // Lucide icon

const Widget = ({ apiUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.answer }]);
    } catch {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Error connecting to chatbot." }
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {/* Toggle Button */}
      <button
        className="border border-[#fefe00] bg-black hover:scale-110 transition-transform text-black p-3 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={22} strokeWidth={2.5} />
      </button>

      {/* Chat Window */}
      <div
        className={`transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {isOpen && (
          <div className="mt-3 w-80 h-96 backdrop-blur-md shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-200">
            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto custom-scrollbar">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`px-4 py-2 rounded-2xl shadow-sm max-w-[70%] text-sm leading-snug ${
                      msg.sender === "user"
                        ? "bg-[#fefe00] text-black rounded-br-none"
                        : "backdrop-blur-md text-white border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {loading && <p className="text-gray-400 text-sm">Bot is typing...</p>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-300 flex items-center gap-2 bg-white/70 backdrop-blur-sm">
              <input
                className="flex-1 bg-[#1a1a1a] border border-gray-300 rounded-full px-4 py-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="bg-black hover:brightness-90 text-black px-4 py-2 rounded-full transition-colors"
                onClick={sendMessage}
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
