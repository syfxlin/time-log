# [538]把二叉搜索树转换为累加树

> [把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/description/)

给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

**例如：**

```
输入: 二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
```

## 思考

利用后序方式的中序遍历即可解决本题，即 right->root->left

## 代码

```java
/*
 * @lc app=leetcode.cn id=538 lang=java
 *
 * [538] 把二叉搜索树转换为累加树
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public TreeNode convertBST(TreeNode root) {
    postOrder(root);
    return root;
  }

  public int pre = 0;

  public void postOrder(TreeNode root) {
    if (root == null) {
      return;
    }
    postOrder(root.right);
    root.val += pre;
    pre = root.val;
    postOrder(root.left);
  }
}
// @lc code=end

```
