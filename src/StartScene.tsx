import React from "react";

interface StartSceneProps {
  onStart: () => void;
}

const StartScene: React.FC<StartSceneProps> = ({ onStart }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: `url('/Space.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1000,
        paddingTop: "8vh"
      }}    >
      <h1 style={{ color: "white", textShadow: "0 2px 10px #000", fontSize: "12rem"}}>Not Not</h1>
      <button
        style={{
          marginTop: "-1rem",
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          borderRadius: "8px",
          border: "none",
          background: "#007bff",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 2px 8px #0008"
        }}
        onClick={onStart}
      >
        スタート
      </button>
    </div>
  );
};

export default StartScene;
