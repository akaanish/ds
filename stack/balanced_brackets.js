
// O(n) time | O(n) space 
const balancedBalancedBrackets = (inputString) => {
    const stack = [];
    const openingBrackets = "[{(";
    const closingBrackets = ")}]";
    const matchingBrackets = {
        "}": "{",
        ")": "(",
        "]": "[",
    }
    for (char of inputString) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }
        else if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            else if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(balancedBalancedBrackets("([])(){}(())()()"))