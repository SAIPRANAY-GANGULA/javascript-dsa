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

console.log(bestTimeToBuySellStocks([7, 1, 5, 3, 6, 4]));
