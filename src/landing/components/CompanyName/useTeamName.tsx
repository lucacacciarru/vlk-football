import { MotionProps } from "framer-motion";
import { useMemo, useState } from "react";

export const useTeamName = () => {
  const [isVlkTeam, setIsVlkTeam] = useState<boolean>(true);
  const selectedName = useMemo(() => (isVlkTeam ? "VLK" : "KLV"), [isVlkTeam]);
  const selectedColor = useMemo(
    () => (isVlkTeam ? "#049752" : "#6d1cad"),
    [isVlkTeam]
  );

  function onClick() {
    setIsVlkTeam((prev) => !prev);
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
    selectedName,
    motionSpanProps,
  };
};
