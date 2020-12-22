# [103]二叉树的锯齿形层序遍历

> [二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal)

## 思路

利用深搜或者广搜遍历二叉树，当遇到偶数层尾插，遇到奇数层头插

## 代码

```java
class Solution {

  public List<List<Integer>> zigzagLevelOrder(final TreeNode root) {
    final List<List<Integer>> list = new ArrayList<>();
    walk(root, 0, list);
    return list;
  }

  public void walk(
    final TreeNode root,
    final int level,
    final List<List<Integer>> list
  ) {
    if (root == null) {
      return;
    }
    while (list.size() <= level) {
      list.add(new ArrayList<>());
    }
    if (level % 2 != 0) {
      list.get(level).add(0, root.val);
    } else {
      list.get(level).add(root.val);
    }
    if (root.left != null) {
      walk(root.left, level + 1, list);
    }
    if (root.right != null) {
      walk(root.right, level + 1, list);
    }
  }
}

```
