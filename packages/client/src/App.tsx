import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCreateGame } from './games/hooks/create-game';

function App() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const { game } = useCreateGame({ canvas: canvasRef });

  return (
    <div className="App">
      <div className="game-screen">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default App;
