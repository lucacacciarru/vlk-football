import { render } from '../../../_shared/testConfig/customRender';
import { CreateTeamButton } from './CreateTeamButton';

describe('CreateTeamButton component', () => {
  test('Should be rendered', () => {
    render(<CreateTeamButton />);
  });
});
