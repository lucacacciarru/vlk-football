import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { ChangeMatchTypeAlert } from './ChangeMatchTypeAlert';

const closeAlertFn = jest.fn();
const closeModalFn = jest.fn();

describe('ChangeMatchTypeAlert component', () => {
  test('If the confirm button is clicked, the functions should be called', () => {
    render(
      <ChangeMatchTypeAlert
        isAlertOpen={true}
        activeMatchType="three"
        onCloseDialog={closeAlertFn}
        onCloseModal={closeModalFn}
      />,
    );
    const confirmButton = screen.getByTestId('confirmButton');
    fireEvent.click(confirmButton);
    expect(closeAlertFn).toBeCalled();
    expect(closeModalFn).toBeCalled();
  });
});
