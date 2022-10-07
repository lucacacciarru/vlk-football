//TODO: Added different role options when the other roles (defender, midfielder, striker) will available
import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useGetRoleList } from '../../../_shared/hook';
import { useFilter } from '../../../_shared/hook/useFilter';
import { Roles } from '../../../_shared/types';

export const RoleOptions: React.FC = () => {
  const { t } = useTranslation();
  const { setFilters } = useFilter();
  const roleList = useGetRoleList();

  function onChange(value: string | string[]) {
    if (setFilters) {
      if (Array.isArray(value)) {
        const roleValues = value.map(item => ({ [item]: true }));
        setFilters(prev => ({
          ...prev,
          roles: { ...prev.roles, ...roleValues },
        }));
      }
      setFilters(prev => ({
        ...prev,
        roles: { ...prev.roles, [value as string]: true },
      }));
    }
  }

  const renderRoleOptions = useMemo(
    () =>
      roleList.map(role => (
        <MenuItemOption value={role}>{t(`playerRoles.${role}`)}</MenuItemOption>
      )),
    [roleList, t],
  );

  return (
    <Dropdown iconName="add" labelButton="Ruolo" closeOnSelect={false}>
      <MenuOptionGroup onChange={onChange} type="radio">
        {renderRoleOptions}
      </MenuOptionGroup>
    </Dropdown>
  );
};
