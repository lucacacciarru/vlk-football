import { useForm } from 'react-hook-form';
import { render } from '../../../_shared/testConfig/customRender';
import { PlaceAndDate } from '../SelectPlaceAndDateForm';
import { DatePicker } from './DatePicker';

describe('DatePicker component', () => {
  test('Should be rendered', () => {
    const { control } = useForm<PlaceAndDate>();
    render(<DatePicker control={control} />);
  });
});
