# [102]二叉树的层次遍历

> [二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/)

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:  
给定二叉树:`[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

## 思考

利用队列可以按节点顺序入队出队，同时记录该节点的层数，即可完成本题

## 代码

```java
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/*
 * @lc app=leetcode.cn id=102 lang=java
 *
 * [102] 二叉树的层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  public List<List<Integer>> levelOrder(TreeNode root) {
    Queue<Node> queue = new LinkedList<>();
    List<List<Integer>> list = new LinkedList<>();
    if (root == null) return list;
    queue.add(new Node(root, 0));
    while (!queue.isEmpty()) {
      Node node = queue.poll();
      if (list.size() <= node.layout) {
        List<Integer> l = new LinkedList<>();
        l.add(node.node.val);
        list.add(l);
      } else {
        list.get(node.layout).add(node.node.val);
      }
      if (node.node.left != null) {
        queue.add(new Node(node.node.left, node.layout + 1));
      }
      if (node.node.right != null) {
        queue.add(new Node(node.node.right, node.layout + 1));
      }
    }
    return list;
  }

  class Node {

    TreeNode node;
    int layout;

    Node(TreeNode node, int layout) {
      this.node = node;
      this.layout = layout;
    }
  }
}
// @lc code=end

```
