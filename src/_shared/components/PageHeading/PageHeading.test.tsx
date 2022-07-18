import { render } from '../../testConfig/customRender';
import { PageHeading } from './PageHeading';

describe('PageHeading component', () => {
  test('Should be rendered', () => {
    render(<PageHeading heading="anyString" body="anyString" />);
  });
});
