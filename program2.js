function smallestMissingPositiveInteger(nums) {
    let n = nums.length;

    // Step 1: Transform the array such that all non-positive integers are replaced with 0
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = 0;
        }
    }

    // Step 2: Mark elements as visited by using the array indices
    for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (index < n && nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    // Step 3: Find the smallest missing positive integer
    for (let i = 0; i < n; i++) {
        if (numsa[i] >= 0) {
            return i + 1;
        }
    }

    return n + 1;
}

// Example usage:
console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
console.log(smallestMissingPositiveInteger([1, 2, 0])); // Output: 3
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
