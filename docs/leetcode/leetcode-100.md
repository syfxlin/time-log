# 相同的树 - LeetCode

> https://leetcode-cn.com/problems/same-tree/

给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

```
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```

示例 2:

```
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```

示例 3:

```
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```

## 思考

这题就是典型的二叉树遍历，只需要遍历，然后进行比较即可

## AC 代码

```java
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=100 lang=java
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {

  public boolean isSameTree(TreeNode p, TreeNode q) {
    return is(p, q);
  }

  public boolean is(TreeNode p, TreeNode q) {
    if (p != null && q != null) {
      if (p.val != q.val) {
        return false;
      }
      if (!is(p.left, q.left)) {
        return false;
      }
      if (!is(p.right, q.right)) {
        return false;
      }
    }
    if ((p != null && q == null) || (p == null && q != null)) {
      return false;
    }
    return true;
  }
}

```
