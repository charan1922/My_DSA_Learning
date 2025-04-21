/**
 * Best Time to Buy and Sell Stock
 *
 * You are given an array `prices` where prices[i] is the price of a given stock on the i-th day.
 * You want to maximize your profit by choosing a single day to buy one stock 
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If no profit is possible, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Initialize minPrice to a very high value so the first price is guaranteed to be lower
    let minPrice = Infinity;

    // Initialize maxProfit to 0, meaning no profit yet
    let maxProfit = 0;

    // Loop through the array of prices
    for (let i = 0; i < prices.length; i++) {
        // If the current price is less than the minPrice we've seen so far,
        // update minPrice to this lower value
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // If not, calculate the profit by selling at current price
            const profit = prices[i] - minPrice;

            // If this profit is greater than the maxProfit so far, update it
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    // After checking all prices, return the maxProfit found
    return maxProfit;
};

/*
🔍 Explanation:

minPrice:
- We initialize it to Infinity because we want to find the lowest price to buy.
- As we loop through the prices array, we keep updating it with the smallest price seen so far.

maxProfit:
- Keeps track of the highest profit we can make.
- We calculate profit at each step as (current price - minPrice),
  and if it’s more than the current maxProfit, we update it.

Loop through the array:
- If we find a lower price than what we’ve seen before, we update minPrice.
- Otherwise, calculate the profit with the current price and compare with maxProfit.

Finally:
- After iterating through all prices, we return the maxProfit.

🏁 Time and Space Complexity:

Time: O(n)
- We make a single pass through the array of length n.

Space: O(1)
- We use only two variables (minPrice and maxProfit), so constant space.
*/

/*
Example:
Input: [7, 1, 5, 3, 6, 4]
Buy on day with price = 1
Sell on day with price = 6
Profit = 6 - 1 = 5

Output: 5
*/
