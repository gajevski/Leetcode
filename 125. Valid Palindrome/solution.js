const isPalindrome = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(s);
  let [left, right] = [0, s.length - 1];
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
