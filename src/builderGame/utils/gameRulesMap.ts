import { Player } from '../../player/store';

export const gameRulesMap = {
  futsal: (players: Player[]) => {
    const gameCondition = {
      correctNumberOfPlayers: 10,
      maxNumberOfGoalKeepers: 2,
    };

    const numberOfSelectedGoalkeepers = players.filter(
      player => player.goalkeeper,
    ).length;

    const checkCorrectNumberOfPlayer =
      players.length === gameCondition.correctNumberOfPlayers;
    const checkMaxNumberOfGoalkeepers =
      numberOfSelectedGoalkeepers <= gameCondition.maxNumberOfGoalKeepers;

    const isDisableCheckButton = [
      checkCorrectNumberOfPlayer,
      checkMaxNumberOfGoalkeepers,
    ].every(condition => condition);

    const futsalRules = {
      numberOfSelectedPlayers: players.length,
      numberOfSelectedGoalkeepers,
      isDisableCheckButton: !isDisableCheckButton,
      gameCondition,
      checkCorrectNumberOfPlayer,
      checkMaxNumberOfGoalkeepers,
    };

    return futsalRules;
  },
};
