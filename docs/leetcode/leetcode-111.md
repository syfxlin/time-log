# 二叉树的最小深度 - LeetCode

> https://leetcode-cn.com/problems/minimum-depth-of-binary-tree

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最小深度 2.

## 思考

这题和上一题最大高度除了一个是最大一个是最小外，还需要判断是否是叶节点，若是叶几点才能将 left 和 right 与本层进行比较，即返回本层的值，若不是叶节点则判断 left 和 right，即判断左右子树的最小深度。

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=111 lang=java
 *
 * [111] 二叉树的最小深度
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

  public int minDepth(TreeNode root) {
    if (root == null) return 0;
    return depth(root, 1);
  }

  public int depth(TreeNode root, int d) {
    int left = Integer.MAX_VALUE;
    int right = Integer.MAX_VALUE;
    if (root.left != null) {
      left = depth(root.left, d + 1);
    }
    if (root.right != null) {
      right = depth(root.right, d + 1);
    }
    if (root.left == null && root.right == null) {
      d = d < left ? d : left;
      d = d < right ? d : right;
    } else {
      d = left < right ? left : right;
    }
    return d;
  }
}

```
