import { render } from '../../../_shared/testConfig/customRender';
import { PlayerList } from './PlayerList';

describe('PlayerList component', () => {
  test('Should be rendered', () => {
    render(<PlayerList id="anyId" items={['1']} />);
  });
});
