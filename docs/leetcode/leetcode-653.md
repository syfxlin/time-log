# [653]两数之和 IV

> [两数之和 IV - 输入 BST](https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/description)

给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

**案例 1:**

```
输入:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

输出: True
```

**案例 2:**

```
输入:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

输出: False
```

## 思考

利用 hash 表和二叉树遍历即可解出本题

## 代码

```java
import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=653 lang=java
 *
 * [653] 两数之和 IV - 输入 BST
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public boolean findTarget(TreeNode root, int k) {
    Set<Integer> set = new HashSet<>();
    return walk(root, set, k);
  }

  public boolean walk(TreeNode root, Set<Integer> set, int k) {
    if (root == null) {
      return false;
    }
    if (set.contains(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return walk(root.left, set, k) || walk(root.right, set, k);
  }
}
// @lc code=end

```
