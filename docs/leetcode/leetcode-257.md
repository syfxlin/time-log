# 二叉树的所有路径 - LeetCode

> https://leetcode-cn.com/problems/binary-tree-paths/description/

给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

```
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
```

## 思考

本题就是寻找叶节点的变种，其实简单

## AC 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=257 lang=java
 *
 * [257] 二叉树的所有路径
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

  public List<String> binaryTreePaths(TreeNode root) {
    List<String> list = new LinkedList<String>();
    if (root == null) return list;
    path(root, list, "");
    return list;
  }

  public void path(TreeNode root, List<String> list, String s) {
    if (root.left == null && root.right == null) {
      list.add(s + root.val);
    }
    String to = s + root.val + "->";
    if (root.left != null) {
      path(root.left, list, to);
    }
    if (root.right != null) {
      path(root.right, list, to);
    }
  }
}

```
