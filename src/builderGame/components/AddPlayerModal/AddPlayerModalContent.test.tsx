import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { AddPlayerModalContent } from './AddPlayerModalContent';

const fn = jest.fn();

describe('AddPlayerModalContent component', () => {
  test('Should be rendered', () => {
    render(<AddPlayerModalContent isOpen={true} onClose={fn} />);
  });
  test('Add player', async () => {
    render(<AddPlayerModalContent isOpen={true} onClose={fn} />);
    const button = screen.getByTestId('addPlayerButton');
    fireEvent.click(button);
    await waitFor(() => {
      expect(fn).toBeCalled();
    });
  });
});
