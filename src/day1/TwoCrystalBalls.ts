export default function two_crystal_balls(breaks: boolean[]): number {
    let index = -1;
    let left = 0;
    let sqrt = Math.floor(Math.sqrt(breaks.length - 1));

    while (left < breaks.length && !breaks[left + sqrt]) {
        left += sqrt;
    }

    for (let i = left + 1; i < breaks.length - 1; i++) {
        if (breaks[i]) {
            index = i;
            break;
        }
    }

    return index;
}
