/**
 * Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines which together with the x-axis forms a container, such that the container contains the most water.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;                    // Start pointer at the beginning
    let right = height.length - 1;   // Start pointer at the end
    let maxArea = 0;                 // Track the maximum area found

    // Loop until the two pointers meet
    while (left < right) {
        // Calculate the width between the two lines
        const width = right - left;

        // Height of the container is limited by the shorter line
        const currentHeight = Math.min(height[left], height[right]);

        // Area = width * height
        const area = width * currentHeight;

        // Update max area if current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer that's at the shorter line
        // (Because moving the taller line won't help increase area)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    // Return the maximum area found
    return maxArea;
};

/*
🔍 Explanation:

Two-pointer technique:
- Start with two lines at the ends of the array.
- Compute the area between them.
- Move the pointer at the shorter line inward, hoping for a taller line (since width is decreasing).

Why this works:
- We want to maximize area = width * height.
- Width decreases as we move inward, so we need to find higher heights to compensate.
- By always moving the shorter line, we give ourselves a chance to find a taller one.

⏱️ Time Complexity: O(n)
- One pass through the array with two pointers.

🧠 Space Complexity: O(1)
- Only a few variables are used.

🎯 Is this Dynamic Programming?
- Not really. This problem is best solved with a greedy two-pointer approach.
- There's no need to store intermediate states/subproblems like in typical DP problems.

*/
