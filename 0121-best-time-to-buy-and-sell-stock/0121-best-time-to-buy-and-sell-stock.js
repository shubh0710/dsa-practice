/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = Infinity;   // cheapest price seen so far
    let best = 0;            // best profit seen so far

    for (const price of prices) {
        if (price < lowest) {
            lowest = price;              // found a cheaper day to buy
        } else if (price - lowest > best) {
            best = price - lowest;       // selling today beats the best so far
        }
    }

    return best;
};