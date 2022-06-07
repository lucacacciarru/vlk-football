import { useForm } from 'react-hook-form';
import { render } from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { PlaceAndDate } from '../SelectPlaceAndDateForm';
import { DatePicker } from './DatePicker';

describe('DatePicker component', () => {
  test('Should be rendered', () => {
    const { result } = renderHook(() =>
      useForm<PlaceAndDate>({
        defaultValues: { date: new Date(), place: 'anyString' },
      }),
    );
    render(<DatePicker control={result.current.control} />);
  });
});
