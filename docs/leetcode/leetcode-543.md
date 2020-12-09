# [543] 二叉树的直径

> https://leetcode-cn.com/problems/diameter-of-binary-tree/

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

示例 :
给定二叉树

```
          1
         / \
        2   3
       / \
      4   5
```

返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。

## 思考

本题就是转化成求树高的最大值，只要找到左右树高和的最大值即可

## 代码

```java
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

  int max = 0;

  public int diameterOfBinaryTree(TreeNode root) {
    walk(root);
    return max;
  }

  public int walk(TreeNode root) {
    if (root == null) return 0;
    int left = walk(root.left);
    int right = walk(root.right);
    if (left + right > max) {
      max = left + right;
    }
    return Math.max(left, right) + 1;
  }
}

```
