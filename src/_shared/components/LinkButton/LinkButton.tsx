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
  const specificLink = to === '/' ? to : `/${to}`;
  return (
    <Link to={specificLink}>
      <Button size="lg" {...buttonProps} data-testid="LinkButton">
        {children}
      </Button>
    </Link>
  );
};
