# 翻转二叉树 - LeetCode

> https://leetcode-cn.com/problems/invert-binary-tree/description/

翻转一棵二叉树。

示例：

输入：

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

> 谷歌：我们 90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

## 思考

本题就是利用普通的二叉树遍历解决问题的题目，比较简单

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=226 lang=java
 *
 * [226] 翻转二叉树
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

  public TreeNode invertTree(TreeNode root) {
    invert(root);
    return root;
  }

  public void invert(TreeNode root) {
    if (root == null) return;
    invert(root.left);
    invert(root.right);
    if (root.left != null || root.right != null) {
      TreeNode node = root.left;
      root.left = root.right;
      root.right = node;
    }
  }
}

```
