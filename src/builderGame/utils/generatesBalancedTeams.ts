import { Player } from '../../player/store';
import { MatchTeams } from '../store/types';

type PlayerRatingAndId = Pick<Player, 'id' | 'rating'>;

function pickSmallerTeam(
  teams: MatchTeams,
  maxNumberOfPlayer: number,
): keyof MatchTeams {
  const klvTeamsLength = teams.klv.players.length;
  const vlkTeamsLength = teams.vlk.players.length;

  if (
    klvTeamsLength === maxNumberOfPlayer / 2 ||
    vlkTeamsLength === maxNumberOfPlayer / 2
  ) {
    return klvTeamsLength === maxNumberOfPlayer / 2 ? 'vlk' : 'klv';
  }

  return teams.vlk.ratingsScore >= teams.klv.ratingsScore ? 'klv' : 'vlk';
}

export function generatesBalancedTeams(
  players: PlayerRatingAndId[] | undefined,
  maxNumberOfPlayer: number,
) {
  const teams: MatchTeams = {
    vlk: { players: [], ratingsScore: 0 },
    klv: { players: [], ratingsScore: 0 },
  };

  const sortedList = players?.sort((a, b) => b.rating - a.rating);

  sortedList?.forEach(player => {
    const rightTeam = pickSmallerTeam(teams, maxNumberOfPlayer);
    teams[rightTeam].players.push(player.id);
    teams[rightTeam].ratingsScore += player.rating;
  });
  return teams;
}
