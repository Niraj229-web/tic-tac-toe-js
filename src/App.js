import React, { useState } from 'react'
import Board from './Component/Board'
import './Style/scoreboard.css'
import ResetBtn from './Component/ResetBtn'
import ScoreBoard from './Component/ScoreBoard'

const App = () => {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xpaly, setXplay] = useState(true);
  const [scores, setScores] = useState({ xScores:0, oScores:0 });
  const [gameOver, setGameOver] = useState(false);


  const handleBoxClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xpaly ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = chekWinner(updateBoard);
    if (winner) {
      if (winner === "X") {
        setScores((prevScore) => ({
          ...prevScore,
          xScores: prevScore.xScores + 1,
        }));
      } else {
        setScores((prevScore) => ({
          ...prevScore,
          oScores: prevScore.oScores + 1,
        }));
      }}
  
  
  setBoard(updateBoard);

  setXplay(!xpaly);
  }

  const chekWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];


      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }   
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }
  // const board =["X" ,"X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <>
      <ScoreBoard scores={scores} xplay={xpaly} />
      <Board board={board} onClik={gameOver ? resetBoard : handleBoxClick} />
      <ResetBtn resetBoard={resetBoard}/>
    </>
  )
}

export default App