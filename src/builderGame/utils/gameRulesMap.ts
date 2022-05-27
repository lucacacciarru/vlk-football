import { Player } from "../../player/store";

export const gameRulesMap = {
  futsal: function (players: Player[]) {
    const numberOfGoalKeepers = players.filter(
      (player) => player.goalkeeper
    ).length;
    return numberOfGoalKeepers <= 2 && players.length === 10 ? true : false;
  },
};
