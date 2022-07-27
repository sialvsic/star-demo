// 121. 买卖股票的最佳时机 https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0

/**
 * @param {number[]} prices
 * @return {number}
 */

// 方法1
var maxProfit = function (prices) {
  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < prices.length; i++) {
    const pick = prices[i];
    for (let index = i; index < prices.length; index++) {
      let cur = prices[index];
      console.log("pick", pick);
      console.log("cur", cur);

      if (cur > pick) {
        tempMax = Math.max(tempMax, cur - pick);
      }

      console.log("tempMax", tempMax);
    }

    max = Math.max(max, tempMax);
  }

  return max;
};

// 方法2
var maxProfit2 = function (prices) {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }

  return maxprofit;
};

const nums1 = [7, 1, 5, 3, 6, 4]; //5
const nums2 = [7, 6, 4, 3, 1]; //0
const r = maxProfit2(nums1);
console.log("r", r); //5
