// src/HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏠 Welcome to the Home Page</h1>
      <p style={styles.subtitle}>
        This is a sample React component with some dummy content.
      </p>
      <ul style={styles.list}>
        <li>Feature 1: Easy to use</li>
        <li>Feature 2: Responsive layout</li>
        <li>Feature 3: Clean design</li>
      </ul>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Learn React
      </a>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #74ABE2, #5563DE)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    opacity: 0.9,
  },
  list: {
    textAlign: "left",
    marginBottom: "2rem",
  },
  link: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: "1.1rem",
    textDecoration: "none",
  },
};

export default HomePage;
