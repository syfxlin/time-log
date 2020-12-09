# [617]合并二叉树

> [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则**不为**NULL 的节点将直接作为新二叉树的节点。

**示例 1:**

```
输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
```

**注意:**合并必须从两个树的根节点开始。

## 思考

就是很简单的二叉树遍历而已

## 代码

```java
/*
 * @lc app=leetcode.cn id=617 lang=java
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
    return merge(t1, t2);
  }

  public TreeNode merge(TreeNode t1, TreeNode t2) {
    if (t1 == null) {
      return t2;
    }
    if (t2 == null) {
      return t1;
    }
    TreeNode node = new TreeNode(t1.val + t2.val);
    node.left = merge(t1.left, t2.left);
    node.right = merge(t1.right, t2.right);
    return node;
  }
}
// @lc code=end

```
