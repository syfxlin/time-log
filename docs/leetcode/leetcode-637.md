# [637]二叉树的层平均值

> [二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/description/)

给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

**示例 1:**

```
输入:
    3
   / \
  9  20
    /  \
   15   7
输出: [3, 14.5, 11]
解释:
第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
```

**注意：**

1.  节点值的范围在 32 位有符号整数范围内。

## 思考

简单的二叉树遍历

## 代码

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/*
 * @lc app=leetcode.cn id=637 lang=java
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  List<Double> list;
  List<Integer> count;

  public List<Double> averageOfLevels(TreeNode root) {
    list = new ArrayList<>();
    count = new ArrayList<>();
    walk(root, 0);
    return IntStream
      .range(0, list.size())
      .mapToObj(i -> list.get(i) / count.get(i))
      .collect(Collectors.toList());
  }

  public void walk(TreeNode root, int deep) {
    if (root == null) {
      return;
    }
    if (list.size() <= deep) {
      list.add(root.val * 1.0);
      count.add(1);
    } else {
      list.set(deep, list.get(deep) + root.val);
      count.set(deep, count.get(deep) + 1);
    }
    walk(root.left, deep + 1);
    walk(root.right, deep + 1);
  }
}
// @lc code=end

```
