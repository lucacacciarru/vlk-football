import { render } from '../../../_shared/testConfig/customRender';
import { AvailablePlayersColumn } from './AvailablePlayersColumn';

describe('AvailablePlayersColumn component', () => {
  test('Should be rendered', () => {
    render(<AvailablePlayersColumn id="test" items={[]} />);
  });
});
