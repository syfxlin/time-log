# 杨辉三角 II - LeetCode

> https://leetcode-cn.com/problems/pascals-triangle-ii

给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

```
输入: 3
输出: [1,3,3,1]
```

进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？

## 思考

利用 C(n,i) = n!/(i!\*(n-i)!)公式，逐个计算该行的每一个数据即可

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=119 lang=java
 *
 * [119] 杨辉三角 II
 * C(n,i) = n!/(i!*(n-i)!)
 */
class Solution {

  public List<Integer> getRow(int rowIndex) {
    List<Integer> res = new LinkedList<Integer>();
    long cur = 1;
    for (int i = 0; i <= rowIndex; i++) {
      res.add((int) cur);
      cur = cur * (rowIndex - i) / (i + 1);
    }
    return res;
  }
}

```
