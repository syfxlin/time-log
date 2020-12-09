# [559]N 叉树的最大深度

> [N 叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/description/)

给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个`3叉树`:

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)

我们应返回其最大深度，3。

**说明:**

1.  树的深度不会超过`1000`。
2.  树的节点总不会超过`5000`。

## 思考

简单的树遍历

## 代码

```java
/*
 * @lc app=leetcode.cn id=559 lang=java
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {

  int max = 0;

  public int maxDepth(Node root) {
    walk(root, 1);
    return max;
  }

  public void walk(Node root, int deep) {
    if (root == null) return;
    max = Math.max(max, deep);
    for (Node node : root.children) {
      walk(node, deep + 1);
    }
  }
}
// @lc code=end

```
