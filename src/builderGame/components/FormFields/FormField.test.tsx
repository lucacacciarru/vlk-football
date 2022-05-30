import { render } from '../../../_shared/testConfig/customRender';
import { SelectInput } from './SelectInput';
import { TextAreaInput } from './TextAreaInput';
import { TextInput } from './TextInput';

describe('FormFields components', () => {
  test('SelectInput should be rendered', () => {
    render(<SelectInput label="anyString" options={[1, 2]} />);
  });
  test('TextAreaInput should be rendered', () => {
    render(<TextAreaInput label="anyString" />);
  });
  test('TextInput should be rendered', () => {
    render(<TextInput label="anyString" />);
  });
});
