import { Stack } from "@chakra-ui/react";
import { Icon } from "../Icon";

export const QuoteContainer: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Stack
      w="100%"
      position="relative"
      p="8"
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        name="quoteStart"
        size="6"
        position="absolute"
        bottom="0"
        right="0"
      />
      {children}
      <Icon name="quoteEnd" position="absolute" top="0" left="0" size="6" />
    </Stack>
  );
};
