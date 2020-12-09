# 二叉树的层次遍历 II - LeetCode

> https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其自底向上的层次遍历为：

```
[
  [15,7],
  [9,20],
  [3]
]
```

## 思考

可以认为是基本层次遍历的变形，难度并不大，只需要记录对应的层数，然后在添加到链表的时候直接添加到指定 index 的子链表即可，然后需要注意判断是否存在指定层数的链表，若不存在则需要创建，最后在将从上到下的遍历的链表进行翻转即是本题结果

## AC 代码

```java
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=107 lang=java
 *
 * [107] 二叉树的层次遍历 II
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

  public List<List<Integer>> levelOrderBottom(TreeNode root) {
    List<List<Integer>> list = new LinkedList<List<Integer>>();
    if (root == null) return list;
    layerOrder(root, list);
    Collections.reverse(list);
    return list;
  }

  private void layerOrder(TreeNode root, List<List<Integer>> list) {
    List<TreeNode> queue = new LinkedList<TreeNode>();
    List<Integer> queue_layer = new LinkedList<Integer>();
    queue.add(root);
    queue_layer.add(0);
    while (!queue.isEmpty()) {
      TreeNode node = queue.remove(0);
      Integer index = queue_layer.remove(0);
      if (list.size() <= index) {
        List temp = new LinkedList<Integer>();
        temp.add(node.val);
        list.add(temp);
      } else {
        list.get(index).add(node.val);
      }
      if (node.left != null) {
        queue.add(node.left);
        queue_layer.add(index + 1);
      }
      if (node.right != null) {
        queue.add(node.right);
        queue_layer.add(index + 1);
      }
    }
  }
}

```
