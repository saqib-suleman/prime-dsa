export default function bs_list(
    haystack: number[],
    needle: number,
    l = 0,
    r = haystack.length - 1,
): boolean {
    let left = l;
    let right = r;

    if (left > right) return false;

    let mid = Math.floor(left + (right - left) / 2);

    if (haystack[mid] === needle) {
        return true;
    } else if (haystack[mid] > needle) {
        return bs_list(haystack, needle, left, mid - 1);
    } else if (haystack[mid] < needle) {
        return bs_list(haystack, needle, mid + 1, right);
    }

    return false;
}
