# [11] 盛最多水的容器

> [https://leetcode-cn.com/problems/container-with-most-water](https://leetcode-cn.com/problems/container-with-most-water)

给定*n*个非负整数*a*<sub>1</sub>，_a_<sub>2，</sub>...，_a_<sub>n，</sub>每个数代表坐标中的一个点 (_i_,_a<sub>i</sub>_) 。在坐标内画*n*条垂直线，垂直线*i* 的两个端点分别为 (_i_,_a<sub>i</sub>_) 和 (_i_, 0)。找出其中的两条线，使得它们与 _x_ 轴共同构成的容器可以容纳最多的水。

**说明：**你不能倾斜容器，且 _n_ 的值至少为 2。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

**示例:**

```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

## 思考

本题利用双指针即可求解，首先定义前后两个指针，判断当前指针的高低然后进行移动，高的不动，低的移动，直到两个指针相遇结束运行。

## 代码

```java
/*
 * @lc app=leetcode.cn id=11 lang=java
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
class Solution {

  public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int max = -1;
    while (left < right) {
      int curr =
        (height[left] > height[right] ? height[right] : height[left]) *
        (right - left);
      max = max > curr ? max : curr;
      if (height[left] > height[right]) {
        right--;
      } else {
        left++;
      }
    }
    return max;
  }
}
// @lc code=end

```
