// Brute Force Approach

const input = [2, 5, -3, -4, 6, 7 , 2];

// [5, 6, 6, 6, 7, -1, 5]

const nextGreater1 = (input) => {
    const result = [];

    const newInputArray = [];
    for (let i = 0; i < 2 * input.length; i++) {
        newInputArray.push(input[i % input.length]);
    }

    for (let i = 0; i < input.length; i++) {
        let next = -1;
        for (let j = i + 1; j < 2 * input.length; j++) {
            if(newInputArray[j] > newInputArray[i]){
                next = newInputArray[j];
                break;
            }
        }
        result.push(next);
        
    }
    return result;
}

console.log(nextGreater1(input))