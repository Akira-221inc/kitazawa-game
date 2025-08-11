import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StartScreen from './StartScreen';
import ExplanationScene from './ExplanationScene';

function App() {
  const [scene, setScene] = useState<'start' | 'explanation' | 'main'>('start');
  const [count, setCount] = useState(0);

  if (scene === 'start') {
    return <StartScreen onStart={() => setScene('explanation')} />;
  }
  if (scene === 'explanation') {
    return <ExplanationScene onNext={() => setScene('main')} />;
  }

  // ここが「次の場面」
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
      background: "#fff"
    }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App
