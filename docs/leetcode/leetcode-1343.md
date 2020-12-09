# [1343]分裂二叉树的最大乘积

> [分裂二叉树的最大乘积](https://leetcode-cn.com/problems/maximum-product-of-splitted-binary-tree/description/)

给你一棵二叉树，它的根为`root`。请你删除 1 条边，使二叉树分裂成两棵子树，且它们子树和的乘积尽可能大。

由于答案可能会很大，请你将结果对 10^9 + 7 取模后再返回。

**示例 1：**

**![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/02/02/sample_1_1699.png)**

```
输入：root = [1,2,3,4,5,6]
输出：110
解释：删除红色的边，得到 2 棵子树，和分别为 11 和 10 。它们的乘积是 110 （11*10）
```

**示例 2：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/02/02/sample_2_1699.png)

```
输入：root = [1,null,2,3,4,null,null,5,6]
输出：90
解释：移除红色的边，得到 2 棵子树，和分别是 15 和 6 。它们的乘积为 90 （15*6）
```

**示例 3：**

```
输入：root = [2,3,9,10,7,8,6,5,4,11,1]
输出：1025
```

**示例 4：**

```
输入：root = [1,1]
输出：1
```

**提示：**

- 每棵树最多有`50000`个节点，且至少有`2`个节点。
- 每个节点的值在`[1, 10000]`之间。

## 思考

乘积=(树的总和-当前树的总和)\*当前树的总和

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=1343 lang=java
 *
 * [1343] 分裂二叉树的最大乘积
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {

  List<Long> list = new LinkedList<>();

  public int maxProduct(TreeNode root) {
    long total = sum(root);
    long max = 0;
    for (Long val : list) {
      max = Math.max(max, (total - val) * val);
    }
    return (int) (max % 1000000007);
  }

  public long sum(TreeNode root) {
    if (root == null) {
      return 0;
    }
    long count = root.val + sum(root.left) + sum(root.right);
    list.add(count);
    return count;
  }
}
// @lc code=end

```
