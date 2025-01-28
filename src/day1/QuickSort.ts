function partition(arr: number[], lo: number, hi: number) {
    let pivot = arr[lo];
    let start = lo;
    let end = hi;

    while (start < end) {
        while (arr[start] <= pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }
        if (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }
    let temp = arr[end];
    arr[end] = arr[lo];
    arr[lo] = temp;

    return end;
}

function sort(arr: number[], lo: number, hi: number) {
    if (lo < hi) {
        const sortedIndex = partition(arr, lo, hi);
        sort(arr, lo, sortedIndex - 1);
        sort(arr, sortedIndex + 1, hi);
    }
}

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}
