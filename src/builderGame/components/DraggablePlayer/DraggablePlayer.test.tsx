import { render } from '../../../_shared/testConfig/customRender';
import { DraggablePlayer } from './DraggablePlayer';

describe('ColumnPlayerItem component', () => {
  test('Should be rendered', () => {
    render(<DraggablePlayer id="anyId" />);
  });
});
