import { Button, ButtonProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
  to: To;
} & ButtonProps;

export const LinkButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  to,
  ...buttonProps
}) => {
  return (
    <Link to={to}>
      <Button size="lg" {...buttonProps}>
        {children}
      </Button>
    </Link>
  );
};
