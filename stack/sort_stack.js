
const sortStack = (stack) => {
    if (stack.length === 0) {
        return stack;
    }
    const top = stack.pop();
    sortStack(stack);
    insertInStackInSortedOrder(stack, top);
    return stack;
}

const insertInStackInSortedOrder = (stack, value) => {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack.push(value);
        return;
    }
    const top = stack.pop();
    insertInStackInSortedOrder(stack, value);
    stack.push(top);
}

console.log(sortStack([3, 4, 1, 5, -1]))