# 路径总和 - LeetCode

> https://leetcode-cn.com/problems/path-sum

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```

返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

## 思考

本题是一道遍历题，我使用的是深度优先遍历，性能稍差，但是结构简单，以后会考虑使用广度优先遍历尝试

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=112 lang=java
 *
 * [112] 路径总和
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

  public boolean hasPathSum(TreeNode root, int sum) {
    if (root == null) return false;
    return has(root, sum, 0);
  }

  public boolean has(TreeNode root, int sum, int target) {
    if (root == null) {
      // if (target == sum) {
      //     return true;
      // } else {
      //     return false;
      // }
      return false;
    }
    target += root.val;
    if (root.left == null && root.right == null) {
      if (target == sum) {
        return true;
      } else {
        return false;
      }
    }
    boolean is = false;
    if (root.left != null) {
      is = has(root.left, sum, target);
    }
    if (!is && root.right != null) {
      is = has(root.right, sum, target);
    }
    return is;
  }
}

```
