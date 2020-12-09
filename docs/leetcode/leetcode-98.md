# [98]验证二叉搜索树

> [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/description/)

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

- 节点的左子树只包含**小于**当前节点的数。
- 节点的右子树只包含**大于**当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

**示例 1:**

```
输入:
    2
   / \
  1   3
输出: true
```

**示例 2:**

```
输入:
    5
   / \
  1   4
    / \
   3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
    根节点的值为 5 ，但是其右子节点值为 4 。
```

## 思考

由于二叉搜索树的中序遍历是有序的，所以就利用类似于中序遍历的递归方式只是在中序遍历入列表的时候改成判断即可，由于需要上一个节点的数据，所以还需要新增一个 pre 节点来存储上一个节点的数据

## 代码

```java
/*
 * @lc app=leetcode.cn id=98 lang=java
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public boolean isValidBST(TreeNode root) {
    return check(root);
  }

  TreeNode pre = null;

  public boolean check(TreeNode root) {
    if (root == null) {
      return true;
    }
    if (!check(root.left)) {
      return false;
    }
    if (pre == null) {
      pre = root;
    } else {
      if (root.val > pre.val) {
        pre = root;
      } else {
        return false;
      }
    }
    return check(root.right);
  }
}
// @lc code=end

```
