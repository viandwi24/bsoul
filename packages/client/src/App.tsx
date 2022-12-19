import React from 'react';
import './App.css';
import { useCreateGame } from './games/hooks/create-game';

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  useCreateGame({ canvas: canvasRef });

  return (
    <div className="App">
      <div className="game-screen">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default App;
