export function mergeLists(left, right) {
    const result = [];
    let leftPointer = 0;
    let rightPointer = 0;
    
    for (let i = 0; i <= (left.length + right.length) - 1; i++) {
        
        if (!left[leftPointer] || left[leftPointer] > right[rightPointer]) {
            result[i] = right[rightPointer];
            rightPointer++;
        } else if (left[leftPointer]) {
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

    return { left, right }
}

export default function sort(list) {
    if (list.length === 1) {
        return list;
    }
    const { left, right } = splitList(list);

    const leftPart = sort(left);
    const rightPart = sort(right);

    return mergeLists(leftPart, rightPart); 
}
