import React, { createContext, useState } from "react";

const gameContext = createContext({
  number: null,
  rounds: null,
  screen: "start",
  startGame: () => {},
  endGame: () => {},
  resetGame: () => {},
});

const GameProvider = ({ children }) => {
  const [number, setNumber] = useState(null);
  const [rounds, setRounds] = useState(null);
  const [screen, setScreen] = useState("start");

  const startGame = (number) => {
    setNumber(number);
    setScreen("game");
  };
  const endGame = (rounds) => {
    setRounds(rounds);
    setScreen("end");
  };
  const resetGame = () => {
    setNumber(0);
    setRounds(0);
    setScreen("start");
  };

  return (
    <gameContext.Provider
      value={{
        number,
        rounds,
        screen,
        startGame,
        endGame,
        resetGame,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export { gameContext, GameProvider };
