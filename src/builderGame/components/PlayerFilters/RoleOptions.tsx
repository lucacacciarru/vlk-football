import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useGetRoleList } from '../../../_shared/hook';
import { useFilter } from '../../../_shared/hook/useFilter';

export const RoleOptions: React.FC = () => {
  const { t } = useTranslation();
  const { updateFilters } = useFilter();
  const roleList = useGetRoleList();

  function onChange(selectedRoles: string | string[]) {
    updateFilters('roles', selectedRoles as string[]);
  }

  const renderRoleOptions = useMemo(
    () =>
      roleList.map(role => (
        <MenuItemOption value={role} key={role} isChecked={true}>
          {t(`playerRoles.${role}`)}
        </MenuItemOption>
      )),
    [roleList, t],
  );

  return (
    <Dropdown
      iconName="add"
      labelButton={t('builderGame.playerFilter.role')}
      closeOnSelect={false}
    >
      <MenuOptionGroup onChange={onChange} type="checkbox">
        {renderRoleOptions}
      </MenuOptionGroup>
    </Dropdown>
  );
};
