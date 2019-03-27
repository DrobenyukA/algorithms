import sort, { mergeLists, splitList } from './index';

describe('merge sort', () => {
    const unsortedList = [9, 3, 2, 5, 8, 7, 6, 4, 1, 0];
    const sortedList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('Should sort list of items in correct order', () => {
        expect(sort(unsortedList/* , (a, b) => a > b*/)).toEqual(sortedList);
    });

    it('Should correct merge two lists with single items', () => {
        expect(mergeLists([2], [1])).toEqual([1, 2]);
    });

    it('Should correct merge two lists with multiple items', () => {
        expect(mergeLists([2, 3], [0, 1])).toEqual([0, 1, 2, 3]);
    });

    it('Should split list into two lists half by half', () => {
        expect(splitList([0,1,2,3,4])).toEqual({
            left: [0,1,2,],
            right: [3,4]
        });
    })
});
