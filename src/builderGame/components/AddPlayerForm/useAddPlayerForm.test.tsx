import { Button } from '@chakra-ui/react';
import { Player } from '../../../player/store';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useAddPlayerForm } from './useAddPlayerForm';

const fn = jest.fn();

const mockPlayer: Omit<Player, 'id'> = {
  name: 'anyString',
  goalkeeper: false,
  rating: 12,
};

describe('useAddPlayerForm hook', () => {
  beforeAll(() =>
    fetchMock.doMock(() =>
      Promise.resolve({
        body: JSON.stringify({}),
      }),
    ),
  );
  test('if selected button is clicked, onClose function should be called', () => {
    const { result } = renderHook(() => useAddPlayerForm(fn));
    const { addPlayerAndCloseModal } = result.current;
    render(
      <Button
        onClick={() => addPlayerAndCloseModal(mockPlayer)}
        data-testid="button"
      />,
    );
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(fn).toBeCalled();
  });
});
