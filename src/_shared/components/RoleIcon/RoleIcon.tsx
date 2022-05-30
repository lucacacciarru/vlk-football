import { IconProps } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '../Icon';
import { IconLibrary } from '../Icon/IconLibrary';

type Props = {
  goalkeeper?: boolean;
  size: string;
} & Omit<IconProps, 'name'>;

export const RoleIcon: React.FC<Props> = ({ goalkeeper, size, ...rest }) => {
  const selectedRoleIcon = useMemo(
    (): keyof IconLibrary => (goalkeeper ? 'hand' : 'ball'),
    [goalkeeper],
  );

  return <Icon size={size} name={selectedRoleIcon} {...rest} />;
};
