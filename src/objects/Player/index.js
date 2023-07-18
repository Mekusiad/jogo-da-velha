import React from "react";

import PlayerX from "../../assets/player_x.png";
import PlayerO from "../../assets/player_o.png";
import "./styles.css";

const Player = ({ player }) => {
  const players = [];
  players["x"] = PlayerX;
  players["o"] = PlayerO;

  return (
    <button className="player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};

export default Player;
