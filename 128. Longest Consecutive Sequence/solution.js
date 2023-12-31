const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let maxSequence = 0;

    for (let num of nums) {
        if (set.has(num - 1)) continue;
        let currNum = num;
        let currMax = 1;

        while (set.has(currNum + 1)) {
            currNum++;
            currMax++
        }

        maxSequence = Math.max(maxSequence, currMax);
    }

    return maxSequence;
};