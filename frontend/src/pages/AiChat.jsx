import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { PiHamburgerBold } from "react-icons/pi";
import TypewriterComponent from "typewriter-effect";
import { AppContext } from "../context/AppContext";

// Add keyframes for moving gradients
const gradientStyles = `
@keyframes moveGradient1 {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(30px, 40px) scale(1.1); }
  100% { transform: translate(0,0) scale(1); }
}
@keyframes moveGradient2 {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-30px, -40px) scale(1.1); }
  100% { transform: translate(0,0) scale(1); }
}
@keyframes moveGradient3 {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(0px, 30px) scale(1.05); }
  100% { transform: translate(0,0) scale(1); }
}
`;

const AiChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const { aiChat } = useContext(AppContext);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    // Inject keyframes for moving gradients
    const styleTag = document.createElement("style");
    styleTag.innerHTML = gradientStyles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;
    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setWaiting(true);
    aiChat(input).then((response) => {
      const aiMsg = { text: response, sender: "ai" };
      setMessages((prev) => [...prev, aiMsg]);
      setWaiting(false);
    });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #181c2b 0%, #232946 40%, #1e202a 100%)",
      }}
    >
      {/* Glowing animated gradients overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(60,220,132,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
            opacity: 0.7,
            animation: "moveGradient1 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,140,0,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
            opacity: 0.6,
            animation: "moveGradient2 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,56,96,0.25) 0%, transparent 70%)",
            filter: "blur(50px)",
            opacity: 0.5,
            transform: "translate(-50%, -50%)",
            animation: "moveGradient3 12s ease-in-out infinite",
          }}
        />
      </div>

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
                className="p-2 focus:outline-none text-white placeholder:text-white w-full bg-transparent"
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
              {messages.map((msg, idx) => {
                // Show typewriter for the last AI message if waiting
                if (
                  msg.sender === "ai" &&
                  idx === messages.length - 1
                ) {
                  return (
                    <div
                      key={idx}
                      className="self-end bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 rounded-2xl shadow-md max-w-[80%] break-words"
                    >
                      <TypewriterComponent
                        onInit={(typewriter) =>
                          typewriter.typeString(msg.text).start()
                        }
                        options={{
                          autoStart: true,
                          delay: 10,
                          cursor: "",
                          loop: false,
                        }}
                      />
                    </div>
                  );
                }
                // Normal rendering for all other messages
                return (
                  <div
                    key={idx}
                    className={`${
                      msg.sender === "user"
                        ? "self-start bg-white/10"
                        : "self-end bg-red-500/20"
                    } backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-2xl shadow-md max-w-[80%] break-words`}
                  >
                    {msg.text}
                  </div>
                );
              })}
              {waiting && (
                <div className="self-end flex justify-end pr-4 pb-2">
                  <PiHamburgerBold className="text-2xl text-white animate-bounce" />
                </div>
              )}
              {/* Dummy div for auto-scroll */}
              <div ref={endOfMessagesRef} />
            </div>
          </div>
          <div
            className={`
  transition-transform duration-500 ease-out
  fixed bottom-0 left-1/2 transform -translate-x-1/2
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
                  className="p-2 focus:outline-none text-white placeholder:text-white w-full bg-transparent"
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