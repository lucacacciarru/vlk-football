import { render } from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useSelectPlaceAndDateForm } from '../SelectPlaceAndDateForm/useSelectPlaceAndDateForm';
import { DatePicker } from './DatePicker';

describe('DatePicker component', () => {
  test('Should be rendered', () => {
    const { result } = renderHook(() => useSelectPlaceAndDateForm());
    render(<DatePicker control={result.current.control} />);
  });
});
