import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IconLibrary } from "../Icon/IconLibrary";

type Params = {
  goalkeeper: boolean;
  rating: number;
};

export function useFrontCard({ goalkeeper, rating }: Params) {
  const { t } = useTranslation();
  const positionPlayerIcon = useMemo(
    (): keyof IconLibrary => (goalkeeper ? "hand" : "ball"),
    [goalkeeper]
  );

  const ratingText = t("playerCard.points", { count: rating });

  return {
    positionPlayerIcon,
    ratingText,
  };
}
