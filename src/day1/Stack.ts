type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;

        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length--;

        if (!this.head) {
            const currHead = this.head;
            this.head = undefined;
            // @ts-ignore
            return currHead?.value;
        }

        const currHead = this.head;
        this.head = this.head?.prev;
        return currHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
