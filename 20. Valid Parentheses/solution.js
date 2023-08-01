const isValid = (s) => {
    const stack = [];
    const pairs = "() [] {}";

    for (let char of s) {
        stack.push(char);

        if (pairs.includes(stack[stack.length - 2] + stack[stack.length - 1])) {
            stack.pop();
            stack.pop();
        }
    }

    return stack.length === 0;
}
