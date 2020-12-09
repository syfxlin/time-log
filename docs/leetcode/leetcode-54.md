# [54]螺旋矩阵

> [螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/description/)

给定一个包含*m*x*n*个元素的矩阵（*m*行,*n*列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

**示例 1:**

```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
```

**示例 2:**

```
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
```

## 思考

螺旋题可以利用公式代码解决

## 思考

```java
import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=54 lang=java
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
class Solution {

  public List<Integer> spiralOrder(int[][] matrix) {
    if (matrix.length == 0) {
      return new ArrayList<Integer>();
    }
    int l = 0, r = matrix[0].length - 1;
    int t = 0, b = matrix.length - 1;
    int size = (r + 1) * (b + 1);
    List<Integer> list = new ArrayList<>(size);
    while (list.size() < size) {
      for (int i = l; i <= r; i++) {
        list.add(matrix[t][i]);
      }
      if (list.size() >= size) {
        return list;
      }
      t++;
      for (int i = t; i <= b; i++) {
        list.add(matrix[i][r]);
      }
      if (list.size() >= size) {
        return list;
      }
      r--;
      for (int i = r; i >= l; i--) {
        list.add(matrix[b][i]);
      }
      if (list.size() >= size) {
        return list;
      }
      b--;
      for (int i = b; i >= t; i--) {
        list.add(matrix[i][l]);
      }
      if (list.size() >= size) {
        return list;
      }
      l++;
    }
    return list;
  }
}
// @lc code=end

```
