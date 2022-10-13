//TODO: Added different role options when the other roles (defender, midfielder, striker) will available
import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useGetRoleList } from '../../../_shared/hook';
import { useFilter } from '../../../_shared/hook/useFilter';

export const RoleOptions: React.FC = () => {
  const { t } = useTranslation();
  const allRoleList = useGetRoleList();
  const renderRoleOptions = useMemo(
    () =>
      allRoleList.map(role => (
        <MenuItemOption value={role} key={role}>
          {t(`playerRoles.${role}`)}
        </MenuItemOption>
      )),
    [allRoleList, t],
  );

  return (
    <Dropdown iconName="add" labelButton="Ruolo" closeOnSelect={false}>
      <MenuOptionGroup type="radio">{renderRoleOptions}</MenuOptionGroup>
    </Dropdown>
  );
};
