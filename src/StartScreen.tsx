import React from "react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #e0e7ff 0%, #f0f0f0 100%)",
      zIndex: 1000
    }}>
      <h1>Kitazawa Game</h1>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          borderRadius: "8px",
          border: "none",
          background: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
        onClick={onStart}
      >
        スタート
      </button>
    </div>
  );
};

export default StartScreen;
