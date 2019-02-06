import { quickSort, partition } from '.';

describe('Quick sort', () => {
    const arrToSort = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    it('Should correctly partition the list according first item', () => {
        const list = [6, 1, 3, 2, 8, 7];
        partition(list, 0, list.length - 1);
        expect(list).toEqual([2, 1, 3, 6, 8, 7]);
    });

    it('Should sort array in correct order', () => {
        expect(quickSort(arrToSort, 0, arrToSort.length - 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

});
