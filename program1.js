function longestSubstring(s) {
    // Implementation of longestSubstring function

    if (s.length === 0) return 0;

    let maxLength = 0;
    let left = 0;
    let right = 0;
    const uniqueChars = new Set();

    while (right < s.length) {
        if (!uniqueChars.has(s[right])) {
            uniqueChars.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            uniqueChars.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}

// Example usage:
const s = "abcabcbb";
console.log(longestSubstring(s)); // Output: 3

module.exports = { longestSubstring };
