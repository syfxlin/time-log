# [316]去除重复字母

> [去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters)

## 思路

[官方题解](https://leetcode-cn.com/problems/remove-duplicate-letters/solution/qu-chu-zhong-fu-zi-mu-by-leetcode-soluti-vuso/)

## 代码

```java
class Solution {

  public String removeDuplicateLetters(final String s) {
    final int[] map = new int[26];
    final boolean[] in = new boolean[26];
    final int l = s.length();
    for (int i = 0; i < l; i++) {
      map[s.charAt(i) - 'a']++;
    }
    // 用 StringBuilder 代替栈
    final StringBuilder stack = new StringBuilder();
    for (int i = 0; i < l; i++) {
      final char ch2 = s.charAt(i);
      if (!in[ch2 - 'a']) {
        while (stack.length() > 0) {
          final int last = stack.length() - 1;
          final char ch1 = stack.charAt(last);
          // 当栈未空的时候，若栈顶字符比当前读取的字符大，同时还有剩余字符，则直接出栈丢弃，同时重置入栈标记
          if (ch1 > ch2 && map[ch1 - 'a'] > 1) {
            stack.deleteCharAt(last);
            map[ch1 - 'a']--;
            in[ch1 - 'a'] = false;
          } else {
            // 否则不做变动
            break;
          }
        }
        // 最后将当前字符入栈，同时标记入栈
        stack.append(ch2);
        in[ch2 - 'a'] = true;
      } else {
        // 如果已经入栈则直接丢弃，将当前字符数量减一
        map[ch2 - 'a']--;
      }
    }
    return stack.toString();
  }
}

```
