import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URLS = [
  "https://www.instagram.com/p/DMGbl2YsxKM/",
  "https://www.instagram.com/p/DMD6QmGvBh4/",
  "https://www.instagram.com/p/DL8XmvoSyIp/",
  "https://www.instagram.com/p/DL3Due1S6wM/",
];

const Instagram = () => {
  const refs = useRef([]);

  useEffect(() => {
    // Load embed script only once
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  // Re-process embeds after mount/update
  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  }, [refs.current]);
  return (
    <div className="text-center mt-20 px-[50px]">
      <h2 className="text-4xl">Check out @foodieland on Instagram</h2>
      <p className="text-gray-400 mt-4">
        Follow us for daily food inspiration, recipes, and behind-the-scenes
        content!
      </p>
      {/* 4 instagram posts embed from food account */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {INSTAGRAM_URLS.map((url, idx) => (
          <blockquote
            key={url}
            className="mt-9 rounded-lg shadow-lg w-full h-[400px] flex items-center justify-center"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            data-instgrm-captioned
            ref={(el) => (refs.current[idx] = el)}
           
          ></blockquote>
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
