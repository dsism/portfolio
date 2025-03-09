import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [shouldDelete, setShouldDelete] = useState(false);
  const text = "Welcome!";

  useEffect(() => {
    const typingInterval = setInterval(
      () => {
        if (!isDeleting) {
          if (index < text.length) {
            setTypedText((prev) => prev + text.charAt(index));
            setIndex((prevIndex) => prevIndex + 1);
          } else if (index === text.length) {
            // Wait 5 seconds before starting the deletion
            setShouldDelete(true);
          }
        } else {
          if (index > 0) {
            setTypedText((prev) => prev.slice(0, -1));
            setIndex((prevIndex) => prevIndex - 1);
          } else {
            setIsDeleting(false);
            setShouldDelete(false); // Reset the delay state
          }
        }
      },
      isDeleting ? 100 : 200
    );

    // Handle the 5-second delay before starting to delete the text
    if (shouldDelete) {
      setTimeout(() => {
        setIsDeleting(true); // Start deleting after 5 seconds
      }, 5000); // 5000ms = 5 seconds
    }

    return () => clearInterval(typingInterval); // Cleanup the interval
  }, [index, isDeleting, shouldDelete, text]);

  return (
    <div className="main-container">
      <div className="grid-parent">
        <div className="grid-portion grid-text">
          <div>
            <h1>Full Stack Developer</h1>
            <div className="typing-container">
              <span className="typing-text">{typedText}</span>
              <span className="cursor">_</span>
            </div>
            <p>
              I am Danielle Ismerim, a full-stack developer with 8+ years of
              experience, skilled in technologies built using JavaScript, such
              as React, React Native, Node.js, TypeScript, and more.
            </p>
            <p>
              While this portfolio is under development, feel free to visit my
              LinkedIn profile for the latest updates by clicking the link
              below.
            </p>
          </div>
          <div className="icons-area">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/danielleismerim/"
            >
              <img className="icon" src="linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="grid-portion grid-img">
          <img
            className="photo"
            alt="Danielle Ismerim - Full Stack Developer"
            src="photo.jpg"
          />
        </div>
      </div>
    </div>
  );
};
