import React, { useState } from "react";

const Widget = ({ apiUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
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
      setMessages([...newMessages, { sender: "bot", text: data.answer}]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Error connecting to chatbot." }
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-80">
      {/* Toggle Button */}
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden mt-2">
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <p className="text-gray-400">Bot is typing...</p>}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-[#121212]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-blue-500 text-white px-3 rounded-lg"
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Widget;
