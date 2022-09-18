import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { AddPlayerModalContent } from './AddPlayerModalContent';

const fn = jest.fn();

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

describe('AddPlayerModalContent component', () => {
  test('Add player', async () => {
    mockFetch();
    render(<AddPlayerModalContent isOpen={true} onClose={fn} />);
    const button = screen.getByTestId('addPlayerButton');
    const inputName = screen.getByTestId('nameInput');
    fireEvent.change(inputName, { target: { value: 'anyString' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(fn).toBeCalled();
    });
  });
});
