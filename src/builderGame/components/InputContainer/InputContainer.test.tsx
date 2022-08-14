import { render } from '../../../_shared/testConfig/customRender';
import { InputContainer } from './InputContainer';

describe('FormFields components', () => {
  test(' should be rendered', () => {
    render(<InputContainer label="anyString" />);
  });
});
