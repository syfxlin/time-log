# 对称二叉树 - LeetCode

> https://leetcode-cn.com/problems/symmetric-tree/

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```

说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

## 思考

该题利用双指针进行递归即可，只需要对称式判断即可

## AC 代码

```java
/*
 * @lc app=leetcode.cn id=101 lang=java
 *
 * [101] 对称二叉树
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

  public boolean isSymmetric(TreeNode root) {
    return is(root, root);
  }

  public boolean is(TreeNode root1, TreeNode root2) {
    boolean re = true;
    if (root1 == null && root2 != null) re = false;
    if (root1 != null && root2 == null) re = false;
    if (root1 != null && root2 != null) {
      if (root1.val != root2.val) re = false;
      if (re) {
        re = is(root1.left, root2.right);
      }
      if (re) {
        re = is(root1.right, root2.left);
      }
    }
    return re;
  }
}

```
