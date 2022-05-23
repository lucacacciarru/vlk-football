import { Skeleton } from "@chakra-ui/react";
import { useMemo } from "react";

type Props = {
  numberOfItems: number;
};

export const PlayerCardSkeleton: React.FC<Props> = ({ numberOfItems }) => {
  const listNumberOfSkeletons = Array.from(Array(numberOfItems).keys());
  const renderSkeletons = useMemo(
    () =>
      listNumberOfSkeletons.map((item) => (
        <Skeleton key={item} h="xs" w="2xs" borderRadius="lg" />
      )),
    [listNumberOfSkeletons]
  );
  return <>{renderSkeletons}</>;
};
