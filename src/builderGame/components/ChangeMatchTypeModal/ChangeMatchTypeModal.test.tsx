import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import { ChangeMatchTypeButton } from '../ChangeMatchTypeButton';
import { ChangeMatchTypeModal } from './ChangeMatchTypeModal';

const fn = jest.fn();

describe('ChangeMatchTypeModal component', () => {
  test('Should be rendered', () => {
    render(<ChangeMatchTypeModal />);
    const openModalButton = screen.getByTestId('openMatchTypeModal');
    fireEvent.click(openModalButton);
  });
  test('If the button to change matchType is clicked, the modal should be closed', () => {
    render(<ChangeMatchTypeButton onClose={fn} activeMatchType="football" />);
    const changeMatchTypeButton = screen.getByTestId('changeMatchTypeButton');
    fireEvent.click(changeMatchTypeButton);
    expect(fn).toBeCalled();
  });
});
