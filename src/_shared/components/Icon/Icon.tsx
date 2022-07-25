import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';
import { iconLibrary, IconLibrary } from './IconLibrary';

type Props = {
  name: keyof IconLibrary;
  size?: string;
} & IconProps;

export const Icon: React.FC<Props> = ({
  name,
  size = 'full',
  color = 'white.0',
  ...rest
}) => {
  return (
    <ChakraIcon
      as={iconLibrary[name]}
      color={color}
      boxSize={size}
      transition="all .3s ease"
      {...rest}
    />
  );
};
