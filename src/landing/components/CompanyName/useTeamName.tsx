import { MotionProps } from "framer-motion";
import { useContext, useMemo } from "react";
import { LandingContext } from "../LandingContext";

export const useTeamName = () => {
  const { selectedTeam, setSelectedTeam } = useContext(LandingContext);
  const selectedColor = useMemo(
    () => (selectedTeam === "vlk" ? "#049752" : "#6d1cad"),
    [selectedTeam]
  );

  function onClick() {
    setSelectedTeam(selectedTeam === "vlk" ? "klv" : "vlk");
  }

  const motionSpanProps: MotionProps = {
    style: { color: selectedColor },
    animate: {
      textShadow: [
        "10px 0px 30px #1b1b1b",
        `10px 0px 30px ${selectedColor}`,
        "10px 0px 30px #1b1b1b",
      ],
    },
    transition: { repeat: Infinity, duration: "2" },
  };

  return {
    onClick,
    selectedTeam: selectedTeam.toUpperCase(),
    motionSpanProps,
  };
};
