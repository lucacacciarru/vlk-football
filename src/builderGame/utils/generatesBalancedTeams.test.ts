import { Player } from '../../_shared/types';
import { generatesBalancedTeams } from './generatesBalancedTeams';

type PlayerRatingAndId = Pick<Player, 'id' | 'rating'>;

const playersList: PlayerRatingAndId[] = [
  {
    id: '1',
    rating: 12,
  },
  {
    id: '2',
    rating: 4,
  },
  {
    id: '3',
    rating: 4,
  },
  {
    id: '4',
    rating: 4,
  },
  {
    id: '5',
    rating: 4,
  },
  {
    id: '6',
    rating: 4,
  },
  {
    id: '7',
    rating: 4,
  },
  {
    id: '8',
    rating: 4,
  },
  {
    id: '9',
    rating: 4,
  },
  {
    id: '10',
    rating: 4,
  },
];

describe('generatesBalancedTeams util', () => {
  test('', () => {
    const result = generatesBalancedTeams(playersList, 10);
    expect(result.klv.ratingsScore).toBe(28);
    expect(result.vlk.ratingsScore).toBe(20);
  });
});
