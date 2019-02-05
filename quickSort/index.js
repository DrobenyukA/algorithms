export function partition(list, left, right) {
    let pivot = list[left];
    let pointer = 'right';
    do {
        if (pointer === 'right') {
            if (list[right] < pivot) {
                list[left] = list[right];
                left += 1;
                pointer = 'left';
            } else {
                right -= 1;
            }
        } else if (pointer === 'left') {
            if (list[left] > pivot) {
                list[right] = list[left];
                right -= 1;
                pointer = 'right';
            } else {
                left += 1;
            }
        }

    } while (left !== right);
    list[left] = pivot;
    return left;
}

export function quickSort(list, left, right) {
    if (left < right) {
        let pivotPosition = partition(list, left, right);
        quickSort(list, left, pivotPosition - 1);
        quickSort(list, pivotPosition + 1, right);
    }
    return list;
}