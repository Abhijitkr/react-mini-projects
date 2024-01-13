import { useEffect, useState } from "react";
import "./tictactoe.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  function getWinner(squares) {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPattern.length; ++i) {
      const [x, y, z] = winPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getSquare]) return;
    cpySquares[getSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== ""))
      setStatus("Match Draw! Restart to play again.");
    else if (getWinner(squares))
      setStatus(`${getWinner(squares)} Won the Game! Restart to play again`);
    else setStatus(`Your turn ${isXTurn ? "X" : "O"}`);
  }, [isXTurn, squares]);

  return (
    <div className="tictactoe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="instruction">
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
