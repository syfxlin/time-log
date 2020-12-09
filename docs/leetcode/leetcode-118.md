# 杨辉三角 - LeetCode

> https://leetcode-cn.com/problems/pascals-triangle/

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## 思考

此题解题的方案就是每一层计算，当计算该层的时候先添加 1，然后读取上一列的数据，计算出该列的数据，然后将末尾的 1 添加到该列，即可

## AC 代码

```java
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=118 lang=java
 *
 * [118] 杨辉三角
 */
class Solution {

  public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> list = new LinkedList<List<Integer>>();
    if (numRows == 0) return list;
    List<Integer> one = new LinkedList<Integer>();
    one.add(1);
    list.add(one);
    for (int i = 1; i < numRows; i++) {
      List<Integer> row = new LinkedList<Integer>();
      row.add(1);
      for (int j = 0; j < i - 1; j++) {
        int left = list.get(i - 1).get(j);
        int right = list.get(i - 1).get(j + 1);
        row.add(left + right);
      }
      row.add(1);
      list.add(row);
    }
    return list;
  }
}

```
