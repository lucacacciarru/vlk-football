import { Box, BoxProps, Stack, Text } from '@chakra-ui/react';
import { QuoteContainer } from './QuoteContainer';

type Props = {
  name: string;
  description?: string;
} & BoxProps;

export const PlayerBackCard: React.FC<Props> = ({
  name,
  description = 'lorem ipsum',
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Stack
        h="100%"
        gap="4"
        alignItems="center"
        justifyContent="center"
        py="4"
      >
        <QuoteContainer>
          <Text textStyle="body-xs" color="white.0">
            {description}
          </Text>
        </QuoteContainer>
      </Stack>
    </Box>
  );
};
