import { useGetSinglePlayer } from '../../../builderGame/hook';
import { TeamsName } from '../../types';
import { PlayerCard } from '../PlayerCard';

type Props = {
  id: string;
  team?: TeamsName;
};

export const FetchedPlayerCard: React.FC<Props> = ({ id, team }) => {
  const playerData = useGetSinglePlayer(id);
  return <PlayerCard {...playerData} team={team} />;
};
