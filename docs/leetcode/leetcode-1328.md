# [1328] 破坏回文串

> [破坏回文串](https://leetcode-cn.com/problems/break-a-palindrome/)

给你一个回文字符串 palindrome ，请你将其中 一个 字符用任意小写英文字母替换，使得结果字符串的字典序最小，且 不是 回文串。

请你返回结果字符串。如果无法做到，则返回一个空串。

示例 1：

```
输入：palindrome = "abccba"
输出："aaccba"
```

示例 2：

```
输入：palindrome = "a"
输出：""
```

提示：

- 1 <= palindrome.length <= 1000
- palindrome 只包含小写英文字母。

## 思考

1. 字符串少于等于 1 时说明无法做到返回空串
2. 从头检查到中间，如果有不为 a 的字符，将该字符替换为 a 即可返回
3. 单数串的中间字符不需要处理，即使不为 a 也不能替换该字符，因为替换后还是回文串（把单数串的中间字符认为 a 即可）
4. 若检查到中间了都没返回，即都是 a，则只需要将最后一个字符替换为 b 即可返回，第 3 种情况和第 4 种情况一样处理

## 代码

```java
class Solution {

  public String breakPalindrome(String palindrome) {
    if (palindrome == null || palindrome.length() <= 1) {
      return "";
    }
    for (int i = 0; i < palindrome.length() / 2; i++) {
      if (palindrome.charAt(i) != 'a') {
        return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1);
      }
    }
    return palindrome.substring(0, palindrome.length() - 1) + 'b';
  }
}

```
