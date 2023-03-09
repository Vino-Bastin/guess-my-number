import React, { useContext } from "react";

import { gameContext } from "./hooks/Game";

import GameStartingScreen from "./screen/GameStartingScreen";
import GameEndScreen from "./screen/GameEndScreen";
import GameScreen from "./screen/GameScreen";

const Game = () => {
  const { screen } = useContext(gameContext);

  return (
    <>
      {screen === "start" && <GameStartingScreen />}
      {screen === "game" && <GameScreen />}
      {screen === "end" && <GameEndScreen />}
    </>
  );
};

export default Game;
