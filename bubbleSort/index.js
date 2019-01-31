
export function bubbleSort(arr, condition) {
    let tmp;
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++) {
            if (condition(arr[j], arr[j + 1])) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }

        if (!swapped) {
            return arr;
        }
    }
    return arr;
}