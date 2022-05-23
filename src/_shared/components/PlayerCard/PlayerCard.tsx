import { Box } from "@chakra-ui/react";
import { Player } from "../../../player/store";
import { Teams } from "../../types/general";
import { PlayerBackCard } from "../PlayerBackCard";
import { PlayerFrontCard } from "../PlayerFrontCard";
import { usePlayerCard } from "./usePlayerCard";

type Props = Player & {
  team: Teams;
};

export const PlayerCard: React.FC<Props> = ({
  id,
  sports,
  team,
  ...player
}) => {
  const { backContainerProps, frontContainerProps, onClick } = usePlayerCard({
    team,
  });

  return (
    <Box
      position="relative"
      __css={{ perspective: "100rem", transformStyle: "preserve-3d;" }}
      onClick={onClick}
      userSelect="none"
    >
      <PlayerFrontCard player={player} team={team} {...frontContainerProps} />
      <PlayerBackCard
        description="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventor"
        name={player.name}
        {...backContainerProps}
      />
    </Box>
  );
};
