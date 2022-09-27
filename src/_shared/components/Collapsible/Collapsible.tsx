import { Accordion, AccordionProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Collapsible: FC<AccordionProps> = ({ children, ...props }) => {
  return (
    <Accordion
      allowMultiple
      allowToggle
      {...props}
      borderTop="none"
      data-testid="collapsible-content"
    >
      {children}
    </Accordion>
  );
};
