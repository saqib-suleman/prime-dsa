type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        const currHead = this.head;
        this.head = currHead?.next;
        currHead.next = undefined;
        this.length--;
        return currHead?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
