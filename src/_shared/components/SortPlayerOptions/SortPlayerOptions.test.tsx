import { render, screen, fireEvent } from '../../testConfig/customRender';
import { SortPlayerOptions } from './SortPlayerOptions';

describe('SortPlayerOptions component', () => {
  test('If an option is clicked, it should fire a function', () => {
    render(<SortPlayerOptions />);
    const sortOption = screen.getByTestId('sortOption-nameAsc');
    fireEvent.click(sortOption);
  });
});
