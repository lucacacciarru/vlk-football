import { render } from '../../../_shared/testConfig/customRender';
import { PlayerList } from './Column';

describe('Column component', () => {
  test('Should be rendered', () => {
    render(<PlayerList id="anyId" items={['1']} />);
  });
});
