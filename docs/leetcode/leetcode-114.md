# [114] 二叉树展开为链表

> [二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)

给定一个二叉树，原地将它展开为链表。

例如，给定二叉树

```
    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

## 思考

本题就是后序遍历，在还没操作节点右子树前，不能破坏该节点的右子树指向。所以采用后序遍历。

通过临时将右子树保存起来，然后将左子树切换到右子树，同时将右子树挂载到新的右子树的最右下角即可完成

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

  public void flatten(TreeNode root) {
    run(root);
  }

  public void run(TreeNode root) {
    if (root == null) {
      return;
    }
    run(root.left);
    run(root.right);
    TreeNode tmp = root.right;
    root.right = root.left;
    root.left = null;
    while (root.right != null) root = root.right;
    root.right = tmp;
  }
}

```
