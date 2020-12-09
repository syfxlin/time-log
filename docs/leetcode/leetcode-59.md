# [59]螺旋矩阵 II

> [螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/description/)

给定一个正整数*n*，生成一个包含 1 到*n*<sup>2</sup>所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

**示例:**

```
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

## 思考

![](/storage/images/uid_1/VOBTehKSAvCenPdSfB0lB9WBDd3NHQg4NxD2ZtZF.png)

生成一个`n×n`空矩阵`mat`，随后模拟整个向内环绕的填入过程：

- 定义当前左右上下边界`l,r,t,b`，初始值`num = 1`，迭代终止值`tar = n * n`；
- 当`num <= tar`时，始终按照`从左到右 从上到下 从右到左 从下到上`填入顺序循环，每次填入后：
  - 执行`num += 1`：得到下一个需要填入的数字；
  - 更新边界：例如从左到右填完后，上边界`t += 1`，相当于上边界向内缩 1。
- 使用`num <= tar`而不是`l < r || t <` b 作为迭代条件，是为了解决当 n 为奇数时，矩阵中心数字无法在迭代过程中被填充的问题。
  最终返回`mat`即可。

## 代码

```java
/*
 * @lc app=leetcode.cn id=59 lang=java
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
class Solution {

  public int[][] generateMatrix(int n) {
    int[][] mat = new int[n][n];
    int target = n * n;
    int index = 1;
    int l = 0, r = n - 1, u = 0, d = n - 1;
    while (index <= target) {
      for (int i = l; i <= r; i++) {
        mat[u][i] = index;
        index++;
      }
      u++;
      for (int i = u; i <= d; i++) {
        mat[i][r] = index;
        index++;
      }
      r--;
      for (int i = r; i >= l; i--) {
        mat[d][i] = index;
        index++;
      }
      d--;
      for (int i = d; i >= u; i--) {
        mat[i][l] = index;
        index++;
      }
      l++;
    }
    return mat;
  }
}
// @lc code=end

```
