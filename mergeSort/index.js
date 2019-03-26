export function mergeLists(left, right) {
    const result = [];
    let leftPointer = 0;
    let rightPointer = 0;
    for (let i = 0; i <= (left.length + right.length) - 1; i++) {
        if (left[i] > right[i]) {
            result[i] = right[rightPointer];
            rightPointer++;
        } else {
            result[i] = left[leftPointer];
            leftPointer++;
        }
    }
    return result;
}

export function splitList(list) {

    const middlePointer = Math.ceil(list.length / 2);
    const left = list.slice(0, middlePointer);
    const right = list.slice(middlePointer);

    return {left, right}
}

export default function sort(list, condition) {
    if (list.length === 1) {
        return list;
    }
    const target = splitList(list);

    const leftPart = sort(target.left);
    const rightPart = sort(target.right);

    return mergeLists(leftPart, rightPart); 
}