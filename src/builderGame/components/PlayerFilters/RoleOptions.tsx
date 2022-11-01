import { Checkbox, Stack } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useGetRoleList } from '../../../_shared/hook';
import { useFilter } from '../../../_shared/hook/useFilter';

export const RoleOptions: React.FC = () => {
  const { t } = useTranslation();
  const roleList = useGetRoleList();
  const { updateFilterList, checkIfValueIsOnFilters } = useFilter();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!checkIfValueIsOnFilters('roles', event.target.value)) {
        updateFilterList('roles', [event.target.value]);
        return;
      }
      updateFilterList('roles', []);
    },
    [checkIfValueIsOnFilters, updateFilterList],
  );

  const renderRoleOptions = useMemo(() => {
    return roleList.map(role => (
      <Checkbox
        color="white.0"
        value={role}
        onChange={onChange}
        isChecked={checkIfValueIsOnFilters('roles', role)}
        key={role}
      >
        {t(`playerRoles.${role}`)}
      </Checkbox>
    ));
  }, [checkIfValueIsOnFilters, onChange, roleList, t]);

  return (
    <Dropdown
      iconName="add"
      labelButton={t('playerFilter.roles')}
      closeOnSelect={false}
    >
      <Stack px="4" py="2" gap="2">
        {renderRoleOptions}
      </Stack>
    </Dropdown>
  );
};
