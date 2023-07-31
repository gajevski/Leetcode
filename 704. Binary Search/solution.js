const search = (nums, target) => {
    let [start, end] = [0, nums.length - 1];

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        console.log(nums[middle]);
        if (nums[middle] === target) return middle;
        if (nums[middle] > target) end = middle - 1;
        if (nums[middle] < target) start = middle + 1;
    }

    return -1;
}
