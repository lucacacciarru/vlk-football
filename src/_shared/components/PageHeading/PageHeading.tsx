import { Box, Text } from '@chakra-ui/react';

type Props = {
  heading: string;
  body?: string;
};

export const PageHeading: React.FC<Props> = ({ heading, body }) => {
  return (
    <Box>
      <Text as="h1" textStyle="h1" textAlign="center" color="white.0">
        {heading}
      </Text>
      {body && (
        <Text as="p" textStyle="body-s" textAlign="center" color="white.50">
          {body}
        </Text>
      )}
    </Box>
  );
};
