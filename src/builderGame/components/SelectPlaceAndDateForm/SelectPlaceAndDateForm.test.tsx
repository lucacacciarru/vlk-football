import * as hookForm from 'react-hook-form';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { SelectPlaceAndDateForm } from './SelectPlaceAndDateForm';

const dateTestValue = '2022-06-09';
const placeTestValue = 'anyString';

describe('SelectPlaceAndDateForm component', () => {
  test('if form is valid and button is clicked, hook form should be called', async () => {
    const useFormSpy = jest.spyOn(hookForm, 'useForm');
    render(<SelectPlaceAndDateForm />);
    const inputDate = screen.getByTestId('inputDate');
    const inputPlace = screen.getByTestId('inputPlace');
    const submitButton = screen.getByRole('button');
    fireEvent.change(inputDate, { target: { value: dateTestValue } });
    fireEvent.change(inputPlace, { target: { value: placeTestValue } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(useFormSpy).toBeCalled();
    });
  });
});
