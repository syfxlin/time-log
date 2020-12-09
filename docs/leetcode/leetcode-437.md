# [437]路径总和 III

> # [路径总和 III](https://leetcode-cn.com/problems/path-sum-iii/description/)

给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过 1000 个节点，且节点数值范围是 [-1000000,1000000] 的整数。

**示例：**

```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```

## 思路

利用层次遍历的思路对二叉树进行遍历，遍历的同时要保存从根走到当前节点的路径，这样就能计算从根节点开始每个父节点到当前子节点路径的长度。

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=437 lang=java
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public int pathSum(TreeNode root, int sum) {
    return pathSum(root, sum, new int[1000], 0);
  }

  public int pathSum(TreeNode root, int sum, int[] sums, int p) {
    if (root == null) return 0;
    int count = root.val == sum ? 1 : 0;
    int tmp = root.val;
    for (int i = p - 1; i >= 0; i--) {
      tmp += sums[i];
      if (tmp == sum) {
        count += 1;
      }
    }
    sums[p] = root.val;
    count += pathSum(root.left, sum, sums, p + 1);
    count += pathSum(root.right, sum, sums, p + 1);
    return count;
  }
}
// @lc code=end

```
