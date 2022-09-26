import {
  AccordionItem,
  AccordionPanel,
  AccordionPanelProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { ButtonCollapsible } from './ButtonCollapsible';

type Props = {
  name: string;
  nested?: boolean;
  accordionPanelProps?: AccordionPanelProps;
};

export const CollapsibleItem: React.FC<PropsWithChildren<Props>> = ({
  name,
  children,
  nested,
  accordionPanelProps,
}) => {
  return (
    <AccordionItem
      _last={nested ? { borderBottom: 'none' } : undefined}
      borderTopWidth="none"
    >
      <ButtonCollapsible name={name} />

      <AccordionPanel
        pb="4"
        data-testid="collapsible-content"
        {...accordionPanelProps}
      >
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};
