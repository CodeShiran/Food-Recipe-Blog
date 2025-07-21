import React, { useEffect, useRef, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";

const AiChat = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed (slower)
    }
  }, []);

  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMsg = { text: input, sender: "user" };
    setMessages([...messages, userMsg]);
    setInput("");
    setWaiting(true)
    setTimeout(() => {
      const aiMsg = { text: "This is a response from AI.", sender: "ai" }; // Replace with real response logic
      setMessages((prev) => [...prev, aiMsg]);
      setWaiting(false)
    }, 1000);
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={assets.bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm pointer-events-none"></div>

      <div
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 z-30 cursor-pointer pointer-events-auto"
      >
        <h2 className="logo-font text-2xl text-white">Foodieland</h2>
      </div>

      {/* Foreground Content */}
      {messages.length === 0 ? (
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen md:px-[50px] px-[25px]">
          <div className="mt-[100px] text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Explore Recipes with AI Search
            </h1>
          </div>
          <div className="mt-[50px] flex flex-row items-center justify-between max-w-[600px] w-full mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md backdrop-blur-md">
            <div className="flex-1">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="p-2 focus:outline-none text-white placeholder:text-white w-full"
                type="text"
                placeholder="Type your message..."
              />
            </div>
            <button onClick={handleSend} className="ml-2 min-w-[48px]">
              <FaCircleArrowUp className="text-2xl text-white hover:text-black duration-150 transition-all" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="relative z-20 flex flex-col items-center justify-start min-h-screen md:px-[50px] py-[100px] px-[25px] pb-[100px]">
            <div className="w-full max-w-[800px] flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`
      ${
        msg.sender === "user"
          ? "self-start bg-white/10"
          : "self-end bg-red-500/20"
      }
      backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-2xl shadow-md max-w-[80%] break-words
    `}
                >
                  {msg.text}
                </div>
              ))}
               {waiting && (
    <div className="self-end flex justify-end pr-4 pb-2">
      <SiFoodpanda className="text-2xl text-white animate-bounce" />
    </div>
  )}
            </div>
          </div>
          <div
            className={`
  transition-transform duration-500 ease-out
  fixed bottom-10 left-1/2 transform -translate-x-1/2
  w-full max-w-[600px] z-30
  ${
    messages.length > 0
      ? "translate-y-0 opacity-100"
      : "translate-y-full opacity-0"
  }
`}
          >
            <div className="flex flex-row items-center justify-between max-w-[600px] w-full mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-md backdrop-blur-md">
              <div className="flex-1">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="p-2 focus:outline-none text-white placeholder:text-white w-full"
                  type="text"
                  placeholder="Type your message..."
                />
              </div>
              <button onClick={handleSend} className="ml-2 min-w-[48px]">
                <FaCircleArrowUp className="text-2xl text-white hover:text-black duration-150 transition-all" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AiChat;
