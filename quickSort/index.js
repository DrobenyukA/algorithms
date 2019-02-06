// TODO: made performance test in browser

export function another_partition(list, left, right) {
    const pivot = list[left];
    let pointer = 'right';

    while (left !== right) {
        
        if (pointer === 'right') {
            if (list[right] < pivot) {
                list[left] = list[right];
                left = left + 1;
                pointer = 'left';
            } else {
                right = right - 1;
            }
        } else if (pointer === 'left') {
            if (list[left] > pivot) {
                list[right] = list[left];
                right = right - 1;
                pointer = 'right';
            } else {
                left = left + 1;
            }
        }

    };

    list[left] = pivot;
    return left;
}

export function partition(list, left, right) {
    const pivot = list[left];
   
    while (left !== right) {

        while ((list[right] > pivot) && (left !== right)) {
            --right;
        }
        
        list[left] = list[right];

        while ((list[left] < pivot) && (left !== right)) {
            ++left;
        }

        list[right] = list[left];
    }

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