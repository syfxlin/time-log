# [221]最大正方形

> [最大正方形](https://leetcode-cn.com/problems/maximal-square/description/)

在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

**示例:**

```
输入:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
```

## 思考

[https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-by-leetcode/](https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-by-leetcode/)

利用动态规划解答

## 代码

```java
/*
 * @lc app=leetcode.cn id=221 lang=java
 *
 * [221] 最大正方形
 */

// @lc code=start
class Solution {

  public int maximalSquare(char[][] matrix) {
    if (matrix.length == 0) return 0;
    int max = 0;
    int[][] dp = new int[matrix.length + 1][matrix[0].length + 1];
    for (int i = 1; i <= matrix.length; i++) {
      for (int j = 1; j <= matrix[0].length; j++) {
        if (matrix[i - 1][j - 1] == '1') {
          dp[i][j] =
            Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) +
            1;
          max = Math.max(max, dp[i][j]);
        }
      }
    }
    return max * max;
  }
}
// @lc code=end

```
