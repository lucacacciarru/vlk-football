import { render } from '../../../_shared/testConfig/customRender';
import { GameModeCard } from './GameModeCard';

describe('GameModeCard component', () => {
  test('Should be rendered', () => {
    render(<GameModeCard gameMode="football" />);
  });
});
