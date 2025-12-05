import React from "react";
import  "./NotFound.css";

function NotFound() {
  return (
     <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="home-button">Go Back Home</a>
      </div>
    </div>
  );
}

export default NotFound;

