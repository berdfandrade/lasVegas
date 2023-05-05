



import { useState } from "react";
import "./slotMachine.css";

// Classe jogador
class Player {
  constructor(name) {
    this.name = name;
    this.credits = 10;
  }
}

function resetGame(player) {
  player.credits = 10;
}

// Lógica do jogo
function game(player) {
  function roll(player) {
    let results = [];
    const symbols = ["🍒", "🍋", "🍊", "🍉"];
    const values = { "🍒": 10, "🍋": 20, "🍊": 30, "🍉": 40 };

    player.credits -= 1;

    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * symbols.length);
      const symbol = symbols[index];
      results.push(symbol);
    }

    if (results[0] === results[1] && results[1] === results[2]) {
      const reward = values[results[0]];
      player.credits += reward;

      return `3X ${results[0]} = +${reward} credits!!!`;
    }

    if (player.credits <= 0) {
      return `Game Over! You lost!`;
    }
    return `${results.join(" | ")}`;
  }

  return roll(player);
}

// Lógica no componente
function SlotMachine() {
  const [player, setPlayer] = useState(new Player("player"));
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleButtonClick = () => {
    if (!gameOver) {
      const gameResult = game(player);
      setResult(gameResult);
      if (gameResult === "Game Over! You lost!") {
        setGameOver(true);
      }
      setPlayer((prevPlayer) => ({ ...prevPlayer }));
    }
  };

  const handleResetClick = () => {
    resetGame(player);
    setResult("");
    setGameOver(false);
    setPlayer((prevPlayer) => ({ ...prevPlayer }));
  };

  return (
    <div className="div_center">
      <div className="box">
        <h2 className="resultado">{result || "Start the game!"}</h2>
        <p className="credits_left">{player.credits} credits left</p>
        {gameOver && (
          <button className="botao_reset" onClick={handleResetClick}>
            Reset
          </button>
        )}
        <button
          className="botao_maquina"
          onClick={handleButtonClick}
          disabled={gameOver}
        >
          Spin!
        </button>
      </div>
    </div>
  );
}

export { Player, SlotMachine };