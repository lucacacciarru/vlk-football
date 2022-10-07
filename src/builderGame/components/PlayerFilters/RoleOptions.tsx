//TODO: Added different role options when the other roles (defender, midfielder, striker) will available
import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useFilter } from '../../../_shared/hook/useFilter';

export const RoleOptions: React.FC = () => {
  const { t } = useTranslation();
  const updateFilters = useFilter();

  function onChange(value: string | string[]) {
    if (value === 'goalkeeper') {
      updateFilters({ role: true });
      return;
    }
    updateFilters({ role: false });
  }

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
      <MenuOptionGroup onChange={onChange} type="radio">
        {renderRoleOptions}
      </MenuOptionGroup>
    </Dropdown>
  );
};
