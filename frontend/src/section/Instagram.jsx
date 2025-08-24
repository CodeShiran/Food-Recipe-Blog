import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URLS = [
  "https://www.instagram.com/p/DNT5UX1TaMB/?utm_source=ig_web_copy_link&igsh=NnRhYXEwODFhODkz",
  "https://www.instagram.com/p/DND9C9iTTzF/?utm_source=ig_web_copy_link&igsh=bThwOHhqYzllMW52", 
  "https://www.instagram.com/p/DMItN-xv_7t/?utm_source=ig_web_copy_link&igsh=c2twb3VteG45eXEz",
  "https://www.instagram.com/p/DLfsqy0ofY1/?utm_source=ig_web_copy_link&igsh=eGdjbGZzenFvdnFj"
];

const Instagram = () => {
  const refs = useRef([]);

  useEffect(() => {
    // Single script loading logic
    if (!window.instgrm && !document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          setTimeout(() => {
            window.instgrm.Embeds.process();
            
          }, 100);
        }
      };
      script.onerror = () => {
        console.error("Failed to load Instagram embed script");
      };
      document.body.appendChild(script);
    } else if (window.instgrm) {
      // Process immediately if script already loaded
      setTimeout(() => {
        window.instgrm.Embeds.process();
      }, 100);
    }
  }, []);

  return (
    <div className="text-center mt-20 px-[50px]">
      <h2 className="text-4xl">Check out @foodieland on Instagram</h2>
      <p className="text-gray-400 mt-4">
        Follow us for daily food inspiration, recipes, and behind-the-scenes
        content!
      </p>
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {INSTAGRAM_URLS.map((url, idx) => (
          <blockquote
            key={idx}
            className="mt-9 rounded-lg shadow-lg w-full h-[400px] instagram-media overflow-hidden"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            data-instgrm-captioned
            ref={(el) => (refs.current[idx] = el)}
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: 'calc(100% - 2px)',
              height: '600px'
            }}
          >
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <FaInstagram className="text-4xl mx-auto mb-2" />
                <p>Loading Instagram post...</p>
              </div>
            </div>
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