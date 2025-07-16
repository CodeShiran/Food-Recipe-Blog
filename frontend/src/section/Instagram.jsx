import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URLS = [
  "https://www.instagram.com/p/CwQb1Q2JQwF/",
  "https://www.instagram.com/p/CwQb1Q2JQwF/",
  "https://www.instagram.com/p/CwQb1Q2JQwF/",
  "https://www.instagram.com/p/CwQb1Q2JQwF/"
];

const Instagram = () => {
  const refs = useRef([]);

  useEffect(() => {
    if (!window.instgrm && !document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          console.log("Instagram script loaded and processed");
        }
      };
      script.onerror = () => {
        console.error("Failed to load Instagram embed script");
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [INSTAGRAM_URLS]);

  return (
    <div className="text-center mt-20 px-[50px]">
      <h2 className="text-4xl">Check out @foodieland on Instagram</h2>
      <p className="text-gray-400 mt-4">
        Follow us for daily food inspiration, recipes, and behind-the-scenes
        content!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {INSTAGRAM_URLS.map((url, idx) => (
          <blockquote
            key={idx}
            className="mt-9 rounded-lg shadow-lg w-full min-h-[400px]"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            data-instgrm-captioned
            ref={(el) => (refs.current[idx] = el)}
          >
            <div>Loading Instagram post...</div>
          </blockquote>
        ))}
      </div>
      <div className="flex mx-auto flex-row gap-4 items-center mt-8 bg-black text-white px-4 py-2 rounded-lg w-[200px] shadow-xl hover:shadow-2xl transition-all duration-150 cursor-pointer">
        <p>Visit Our Instagram</p>
        <FaInstagram className="text-white" />
      </div>
    </div>
  );
};

export default Instagram;