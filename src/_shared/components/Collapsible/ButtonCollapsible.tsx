import {
  AccordionButton,
  AccordionIcon,
  Flex,
  Heading,
} from '@chakra-ui/react';

type Props = {
  name: string;
};

export const ButtonCollapsible: React.FC<Props> = ({ name }) => {
  return (
    <Heading as="h2" size="h2">
      <AccordionButton role="collapsable-button">
        <Flex flex="1" textAlign="left" justifyContent="space-between">
          {name}
          <AccordionIcon mr="2" color="brand.primary" />
        </Flex>
      </AccordionButton>
    </Heading>
  );
};
