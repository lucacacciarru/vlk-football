import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { useDeletePlayer } from '../../../_shared/hook';

type Props = {
  id: string;
  isDisabled: boolean;
};

export const OptionDropdown: React.FC<Props> = ({ id, isDisabled }) => {
  const { t } = useTranslation();

  const deletePlayer = useDeletePlayer();
  const deletePlayerOnClick = useCallback(
    () => deletePlayer(id),
    [deletePlayer, id],
  );

  return (
    <Menu>
      <MenuButton disabled={isDisabled} position="absolute" right="0" top="5%">
        <Icon name="threeDots" size="6" color="black.0" />
      </MenuButton>
      <MenuList>
        <MenuItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={deletePlayerOnClick}
          icon={
            <Flex alignItems="center" justifyContent="center">
              <Icon name="deleteCircle" color="black.0" size="6" />
            </Flex>
          }
        >
          {t('builderGame.listPlayerCard.deletePlayer')}
        </MenuItem>
        <MenuItem
          icon={
            <Flex alignItems="center" justifyContent="center">
              <Icon name="details" color="black.0" size="6" />
            </Flex>
          }
        >
          {t('builderGame.listPlayerCard.stats')}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
