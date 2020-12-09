# [94]二叉树的中序遍历

> [二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/)

给定一个二叉树，返回它的*中序*遍历。

**示例:**

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```

**进阶:**递归算法很简单，你可以通过迭代算法完成吗？

## 思考

利用递归可以很简单的完成这题

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=94 lang=java
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> list = new LinkedList<Integer>();
    run(list, root);
    return list;
  }

  public void run(List<Integer> list, TreeNode root) {
    if (root == null) {
      return;
    }
    run(list, root.left);
    list.add(root.val);
    run(list, root.right);
  }
}
// @lc code=end

```
