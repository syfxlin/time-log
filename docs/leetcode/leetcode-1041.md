# [1041]困于环中的机器人

> [困于环中的机器人](https://leetcode-cn.com/problems/robot-bounded-in-circle/description/)

在无限的平面上，机器人最初位于`(0, 0)`处，面朝北方。机器人可以接受下列三条指令之一：

- `"G"`：直走 1 个单位
- `"L"`：左转 90 度
- `"R"`：右转 90 度

机器人按顺序执行指令`instructions`，并一直重复它们。

只有在平面中存在环使得机器人永远无法离开时，返回`true`。否则，返回`false`。

**示例 1：**

```
输入："GGLLGG"
输出：true
解释：
机器人从 (0,0) 移动到 (0,2)，转 180 度，然后回到 (0,0)。
重复这些指令，机器人将保持在以原点为中心，2 为半径的环中进行移动。
```

**示例 2：**

```
输入："GG"
输出：false
解释：
机器人无限向北移动。
```

**示例 3：**

```
输入："GL"
输出：true
解释：
机器人按 (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ... 进行移动。
```

**提示：**

1.  `1 <= instructions.length <= 100`
2.  `instructions[i]`在`{'G', 'L', 'R'}`中

## 思考

最多 4 次如果没有到达原点就不可能再到达原点，而 4 次之类如果已经到达原点则会困于圈内

## 代码

```java
/*
 * @lc app=leetcode.cn id=1041 lang=java
 *
 * [1041] 困于环中的机器人
 */

// @lc code=start
class Solution {

  public boolean isRobotBounded(String instructions) {
    int dir = 0; // 0:上 1:右 2:下 3:左
    int[] map = new int[2];
    for (int i = 0; i < 4; i++) {
      for (char ch : instructions.toCharArray()) {
        switch (ch) {
          case 'G':
            map[dir == 0 || dir == 2 ? 1 : 0] += dir == 0 || dir == 1 ? 1 : -1;
            break;
          case 'L':
            dir = dir - 1 < 0 ? 3 : dir - 1;
            break;
          case 'R':
            dir = dir + 1 > 3 ? 0 : dir + 1;
        }
      }
      if (map[0] == 0 && map[1] == 0) {
        return true;
      }
    }
    return false;
  }
}
// @lc code=end

```
