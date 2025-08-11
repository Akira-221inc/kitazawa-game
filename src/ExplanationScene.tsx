import React, { useRef } from "react";
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useState, useEffect } from "react";

interface ExplanationSceneProps {
  onNext: () => void;
}

const ExplanationScene: React.FC<ExplanationSceneProps> = ({ onNext }) => {
  // 立方体の回転状態
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  // キーボードイベント
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const DEG_90 = Math.PI / 2;
      setRotation(prev => {
        switch (e.key) {
          case "ArrowUp":
            return [prev[0] - DEG_90, prev[1], prev[2]];
          case "ArrowDown":
            return [prev[0] + DEG_90, prev[1], prev[2]];
          case "ArrowLeft":
            return [prev[0], prev[1] - DEG_90, prev[2]];
          case "ArrowRight":
            return [prev[0], prev[1] + DEG_90, prev[2]];
          default:
            return prev;
        }
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // テクスチャ付きBox
  const RotatingBox = () => {
    // 画像テクスチャを読み込み
    const texture = useLoader(TextureLoader, '/NotNot.png');
    // 6面すべてに同じテクスチャを貼る
    const materials = Array(6).fill(<meshStandardMaterial attach="material" map={texture} />);
    return (
      <mesh rotation={rotation} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        {materials}
      </mesh>
    );
  };

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
      <div style={{ width: 300, height: 300, borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
        <Canvas camera={{ position: [2, 3, 5], fov: 50 }} style={{ background: 'linear-gradient(180deg, #2c3e50 0%, #e17055 100%)' }} shadows>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
          <RotatingBox />
        </Canvas>
      </div>
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
