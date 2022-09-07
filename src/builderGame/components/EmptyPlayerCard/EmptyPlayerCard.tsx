import { Flex, FlexProps } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';

type Props = {
  isSelected?: boolean;
};

export const EmptyPlayerCard: React.FC<Props> = ({ isSelected }) => {
  const isSelectedStyle: FlexProps = isSelected
    ? { border: '1px solid', borderColor: 'black.50' }
    : {};
  return (
    <Flex
      w="52"
      h="64"
      bg="black.80"
      borderRadius="xl"
      alignItems="center"
      justifyContent="center"
      {...isSelectedStyle}
    >
      <Icon name="add" size="12" color="black.0" />
    </Flex>
  );
};
