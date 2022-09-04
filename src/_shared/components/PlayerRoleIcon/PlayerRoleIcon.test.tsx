import { render } from '../../testConfig/customRender';
import { PlayerRoleIcon } from './PlayerRoleIcon';

describe('RoleIcon component', () => {
  test('Should be rendered', () => {
    render(<PlayerRoleIcon size="12" goalkeeper={true} />);
  });
});
