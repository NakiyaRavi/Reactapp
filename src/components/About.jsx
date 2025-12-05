import React from "react";

function About() {
  return (
      <div className="about-container">
      <h1>About TextUtils</h1>
      <p className="lead">
        TextUtils is a simple and powerful text analyzer tool that helps you
        modify, optimize, and clean your text with a single click.
      </p>

      <div className="about-card">
        <h2>Features</h2>
        <ul>
          <li>Convert text to Uppercase / Lowercase</li>
          <li>Remove Extra Spaces</li>
          <li>Copy Text to Clipboard</li>
          <li>Count Words & Characters</li>
          <li>Preview your text instantly</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Why use TextUtils?</h2>
        <p>
          It is fast, simple, and completely browser-based. No data is uploaded
          to any server — everything runs on your device.
        </p>
      </div>

      <div className="about-card">
        <h2>Developer</h2>
        <p>Developed in React by Nakiya.</p>
      </div>
    </div>
  );
}

export default About;
