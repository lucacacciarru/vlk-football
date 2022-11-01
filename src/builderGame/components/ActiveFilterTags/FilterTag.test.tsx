import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { FilterTag } from './FilterTag';

describe('FilterTag component', () => {
  test('Should be rendered', async () => {
    render(<FilterTag filterKey="ratings" value="12" />);
    const closeButton = screen.getByTestId('closeButton');
    fireEvent.click(closeButton);
  });
});
