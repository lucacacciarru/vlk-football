import { render } from '../../../_shared/testConfig/customRender';
import { AddPlayerModalContent } from './AddPlayerModalContent';

describe('AddPlayerModalContent component', () => {
  test('Should be rendered', () => {
    render(<AddPlayerModalContent isOpen={true} onClose={() => {}} />);
  });
});
