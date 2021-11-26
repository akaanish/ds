class MinMaxStack {
    constructor() {
        this.minMaxStack = [];
        this.stack = [];
    }
    // o(1) time | o(1) space
    peek() {
        return this.stack.length ? this.stack[this.stack.length - 1] : "stack is empty";
    }

    // o(1) time | o(1) space
    pop() {
        this.minMaxStack.pop();
        return this.stack.length ? this.stack.pop() : "stack is empty";
    }

    // o(1) time | o(1) space
    push(number) {
        const minMaxStackElement = { min: number, max: number };
        if (this.minMaxStack.length) {
            const lastMinMaxStackElement = this.minMaxStack[this.minMaxStack.length - 1];
            minMaxStackElement.min = Math.min(lastMinMaxStackElement.min, number);
            minMaxStackElement.max = Math.max(lastMinMaxStackElement.max, number);
        }
        this.minMaxStack.push(minMaxStackElement);
        this.stack.push(number);
    }

    // o(1) time | o(1) space
    getMin() {
        return this.minMaxStack.length ? this.minMaxStack[this.minMaxStack.length - 1].min : "stack is empty";
    }

    // o(1) time | o(1) space
    getMax() {
        return this.minMaxStack.length ? this.minMaxStack[this.minMaxStack.length - 1].max : "stack is empty";
    }


}

const minMaxStack = new MinMaxStack();

minMaxStack.push(2);
minMaxStack.push(5);
minMaxStack.push(1);
minMaxStack.push(6);
minMaxStack.push(8);
minMaxStack.push(12);
minMaxStack.pop();
minMaxStack.pop();

console.log(minMaxStack.peek())
console.log(minMaxStack.getMax())
console.log(minMaxStack.getMin())