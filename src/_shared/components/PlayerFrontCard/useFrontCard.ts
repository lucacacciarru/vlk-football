import { useTranslation } from "react-i18next";

type Params = {
  rating: number;
};

export function useFrontCard({ rating }: Params) {
  const { t } = useTranslation();

  const ratingText = t("playerCard.points", { count: rating });

  return {
    ratingText,
  };
}
