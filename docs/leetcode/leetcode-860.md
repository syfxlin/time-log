# [860]柠檬水找零

> [柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)

## 思考

顾客付款只能是 5、10、20，柠檬水的价格是 5 元，那么找零可以是 5、10，那么我们只需要存储 5、10 的个数。

当顾客付款 5 元时，无需找零，此时 5 元个数加一。

当顾客付款 10 元时，此时只能找零 5 元，5 元个数减一，10 元加一。后续判断 5 元是否小于零，即 5 元个数是否已经透支，就可以判断是否能找零。

当顾客付款 20 元时，此时可以找零一张 10 元 + 一张 5 元或者 3 张 5 元。当 10 元充足的时候选择 10 元的方案。不管 10 元方案还是 5 元方案，5 元都需要支出，所以只需要后续判断 5 元是否透支就可以判断是否找零。

## 代码

```java
class Solution {

  public boolean lemonadeChange(int[] bills) {
    int five = 0;
    int ten = 0;
    for (int bill : bills) {
      if (bill == 5) {
        five++;
      } else if (bill == 10) {
        five--;
        ten++;
      } else { // bill == 20
        if (ten > 0) {
          // 10 元充足
          ten--;
          five--;
        } else {
          // 使用 5 元方案
          five -= 3;
        }
      }
      if (five < 0) {
        return false;
      }
    }
    return true;
  }
}

```
