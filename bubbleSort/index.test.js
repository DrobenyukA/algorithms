import { bubbleSort } from '../bubbleSort';

describe('bubble sort', () => {
    const arrayToSort = [1, 5, 2, 3, 4];
    const sortedArray = [1, 2, 3, 4, 5];
    const arrayToSortOnlyTwice = [5, 1, 2, 3, 4];
    const condition = jest.fn((a, b) => a > b);

    afterEach(() => {
        condition.mockClear();
    })

    it('Should return sorted array in correct order', () => {
        expect(bubbleSort(arrayToSort, condition)).toEqual(sortedArray);
    });

    it('Should not do more than one iteration in case array is already sorted', () => {
        expect(bubbleSort(sortedArray, condition)).toEqual(sortedArray);
        expect(condition).toHaveBeenCalledTimes(sortedArray.length);
    });

    it('Should call as less iteration as possible to sort array', () => {
        expect(bubbleSort(arrayToSortOnlyTwice, condition)).toEqual(sortedArray);
        expect(condition.mock.calls.length).toBe(arrayToSortOnlyTwice.length * 2 - 1);
    });
})