import { useForm } from 'react-hook-form';
import { render } from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { DatePicker } from './DatePicker';

export type DateAndPlaceFields = {
  date: Date;
  place: string;
};

describe('DatePicker component', () => {
  test('Should be rendered', () => {
    const { result } = renderHook(() =>
      useForm<DateAndPlaceFields>({
        defaultValues: { date: new Date(), place: 'anyString' },
      }),
    );
    render(<DatePicker control={result.current.control} />);
  });
});
