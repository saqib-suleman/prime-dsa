export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];
    const path = [];

    while (q.length) {
        const curr = q.shift();
        path.push(curr?.value);

        if (curr?.value === needle) {
            return true;
        }

        if (curr?.left) q.push(curr?.left);
        if (curr?.right) q.push(curr?.right);
    }

    console.log(path);

    return false;
}
