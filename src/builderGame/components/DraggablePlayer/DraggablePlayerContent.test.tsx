import { render } from '../../../_shared/testConfig/customRender';
import { DraggablePlayerContent } from './DraggablePlayerContent';

describe('ColumnPlayerContent component', () => {
  test('Should be rendered', () => {
    render(<DraggablePlayerContent id="anyId" />);
  });
});
