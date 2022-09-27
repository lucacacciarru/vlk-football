import { render } from '../../testConfig/customRender';
import { Collapsible } from './Collapsible';
import { CollapsibleItem } from './CollapsibleItem';

describe('Collapsible component', () => {
  test('should render correctly', () => {
    render(
      <Collapsible>
        <CollapsibleItem name="Stile" nested>
          Lorem ipsum
        </CollapsibleItem>
      </Collapsible>,
    );
  });
});
