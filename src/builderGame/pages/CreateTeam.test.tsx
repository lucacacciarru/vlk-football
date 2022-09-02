import { render } from '../../_shared/testConfig/customRender';
import { CreateTeam } from './CreateTeam';

describe('CreateTeam page', () => {
  test('Should be rendered', () => {
    render(<CreateTeam />);
  });
});
