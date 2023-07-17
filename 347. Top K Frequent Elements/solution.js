const topKFrequent = (nums, k) => {
    const map = {};
    const bucket = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        bucket.push([]); 
    }

    for (let item in map) {
        bucket[map[item]].push(item);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length === 0) {
            continue;
        } else {
            result = [...result, ...bucket[i]]
        }
    }

    return result.slice(0, k);
};