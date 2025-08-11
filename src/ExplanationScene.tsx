import React from "react";

interface ExplanationSceneProps {
  onNext: () => void;
}

const ExplanationScene: React.FC<ExplanationSceneProps> = ({ onNext }) => {
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
      background: "linear-gradient(135deg, #fffbe0 0%, #f0f0f0 100%)",
      zIndex: 1000
    }}>
      <h2>ゲームの説明</h2>
      <p>ここにゲームの説明文を入れてください。</p>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          borderRadius: "8px",
          border: "none",
          background: "#28a745",
          color: "white",
          cursor: "pointer"
        }}
        onClick={onNext}
      >
        次へ
      </button>
    </div>
  );
};

export default ExplanationScene;
