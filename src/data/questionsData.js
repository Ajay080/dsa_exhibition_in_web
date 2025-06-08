// src/data/questionsData.js
export const questionBank = {
  arrays: [
    {
      id: "two-sum",
      title: "Two Sum",
      description: "Use a HashMap to store seen numbers and indices.",
      code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}`,
    },
  ],
  strings: [
    {
      id: "reverse-string",
      title: "Reverse String",
      description: "Reverse the string by swapping characters from both ends.",
      code: `function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++; right--;
  }
}`,
    },
    {
      id: "valid-anagram",
      title: "Valid Anagram",
      description: "Check if two strings are anagrams by character count.",
      code: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }
  return Object.values(count).every(val => val === 0);
}`,
    },
  ],
};
