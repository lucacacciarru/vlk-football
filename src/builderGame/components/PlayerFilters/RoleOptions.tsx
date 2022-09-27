//TODO: Added different role options when the other roles (defender, midfielder, striker) will available
import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';

export const RoleOptions: React.FC = () => {
  const { t } = useTranslation();
  const renderRoleOptions = useMemo(() => {
    const roleList: boolean[] = [true, false];
    return roleList.map(role => {
      if (role) {
        return (
          <MenuItemOption value="goalkeeper" key="goalkeeper">
            {t('playerRoles.goalkeeper')}
          </MenuItemOption>
        );
      }

      return (
        <MenuItemOption value="movementPlayer" key="movementPlayer">
          {t('playerRoles.movementPlayer')}
        </MenuItemOption>
      );
    });
  }, [t]);

  return (
    <Dropdown iconName="add" labelButton="Ruolo" closeOnSelect={false}>
      <MenuOptionGroup type="checkbox">{renderRoleOptions}</MenuOptionGroup>
    </Dropdown>
  );
};
