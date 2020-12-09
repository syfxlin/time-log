# 接雨水

> https://leetcode-cn.com/problems/trapping-rain-water/description/

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

```
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
```

## 思考

初始的解答是这样的：

1. 若 stack 为空则直接入栈
2. 若 stack 底部的元素大于当前元素则入栈
3. 若 stack 底部的元素小于当前元素则将整个栈出栈，并将当前元素入栈
4. 由于后面的元素无法简单的判断，所以则逆向来一次

还有更优的解法，即直接对数组进行操作，不借助栈实现，利用标记来实现类似于上方的步骤

## 代码

```java
import java.util.Stack;

/*
 * @lc app=leetcode.cn id=42 lang=java
 *
 * [42] 接雨水 30% 84%
 */
class Solution {

  public int trap(int[] height) {
    Stack<Integer> stack = new Stack<Integer>();
    int sum = 0;
    for (int i = 0; i < height.length; i++) {
      if (stack.empty() || stack.get(0) > height[i]) {
        stack.push(height[i]);
      } else {
        int max = stack.remove(0);
        while (!stack.empty()) {
          int num = max - stack.pop();
          sum += num > 0 ? num : 0;
        }
        stack.push(height[i]);
      }
    }
    if (!stack.empty()) {
      int n = stack.size();
      stack.removeAllElements();
      for (int i = height.length - 1; i >= height.length - n; i--) {
        if (stack.empty() || stack.get(0) > height[i]) {
          stack.push(height[i]);
        } else {
          int max = stack.remove(0);
          while (!stack.empty()) {
            int num = max - stack.pop();
            sum += num > 0 ? num : 0;
          }
          stack.push(height[i]);
        }
      }
    }
    return sum;
  }
}

```
