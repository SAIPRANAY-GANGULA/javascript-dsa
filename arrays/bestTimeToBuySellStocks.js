function bestTimeToBuySellStocks(arr) {
  let min_buy_price = arr[0];
  let max_profit = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min_buy_price) {
      min_buy_price = arr[i];
    }
    if (arr[i] - min_buy_price > max_profit) {
      max_profit = arr[i] - min_buy_price;
    }
  }

  return max_profit;
}


const maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;

};

console.log(bestTimeToBuySellStocks([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
