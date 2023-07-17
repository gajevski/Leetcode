const groupAnagrams = (strs) => {
    const anagrams = strs.map((str) => str.split('').sort().join(''));
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        if (!map[anagrams[i]]) {
            map[anagrams[i]] = [strs[i]];
        } else {
            map[anagrams[i]].push(strs[i])
        }
    }
    return Object.values(map);
};
