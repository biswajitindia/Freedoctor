import React, { useState, useRef, useEffect } from 'react';
// import { url } from './const';
 const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCGwmXscsF3UoPE9m2I7UJJnQ6Ev3vPWfA";

const ChatAi = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const askQuestion = async () => {
    if (!input.trim()) return;

    const now = new Date();
    const userMessage = { sender: 'user', text: input, time: now };
    setMessages((prev) => [...prev, userMessage]);

    const payload = {
      contents: [
        {
          parts: [
            {
              text: input
            }
          ]
        }
      ]
    };

    setInput('');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';

      const aiMessage = {
        sender: 'ai',
        text: aiResponse,
        time: new Date()
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: '⚠️ Error getting response from Gemini API.',
          time: new Date()
        }
      ]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[80%] h-[90%] bg-white shadow-md rounded-lg flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col max-w-[70%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {msg.time?.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askQuestion()}
            className="flex-1 p-2 border rounded shadow-sm"
            placeholder="Type your message..."
          />
          <button
            onClick={askQuestion}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAi;
