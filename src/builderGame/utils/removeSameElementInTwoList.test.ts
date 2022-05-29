import { removeSameElementInTwoList } from './removeSameElementInTwoList';

const mock_params = {
  firstList: ['1', '2'],
  secondList: ['1', '3'],
};

describe('removeSameElementInTwoList function', () => {
  test('test', () => {
    const { firstList, secondList } = mock_params;
    const result = removeSameElementInTwoList(firstList, secondList);
    expect(result).toEqual(['2']);
  });
});
