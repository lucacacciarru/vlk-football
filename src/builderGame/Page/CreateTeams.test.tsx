import { render } from '../../_shared/testConfig/customRender';
import { CreateTeams } from './CreateTeams';

describe('CreateTeams page', () => {
  test('Should be rendered', () => {
    render(<CreateTeams />);
  });
});
