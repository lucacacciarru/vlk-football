import { Box } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { IconLibrary } from '../Icon/IconLibrary';

type Props = {
  iconName?: keyof IconLibrary;
};

export const ImageFallback: React.FC<Props> = ({
  iconName = 'placeholderPlayer',
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      height="full"
    >
      <Icon name={iconName} color="black.50" objectFit="contain" />
    </Box>
  );
};
