# [208]实现 Trie

> [实现 Trie (前缀树)](https://leetcode-cn.com/problems/implement-trie-prefix-tree/description/)

实现一个 Trie (前缀树)，包含`insert`,`search`, 和`startsWith`这三个操作。

**示例:**

```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app");     // 返回 true
```

**说明:**

- 你可以假设所有的输入都是由小写字母`a-z`构成的。
- 保证所有输入均为非空字符串。

## 思考

见[官方题解](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)

## 代码

```java
/*
 * @lc app=leetcode.cn id=208 lang=java
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {

  TrieNode head;

  /** Initialize your data structure here. */
  public Trie() {
    head = new TrieNode();
  }

  /** Inserts a word into the trie. */
  public void insert(String word) {
    TrieNode pre = head;
    for (char ch : word.toCharArray()) {
      if (!pre.containsKey(ch)) {
        pre.put(ch, new TrieNode());
      }
      pre = pre.get(ch);
    }
    pre.setEnd();
  }

  /** Returns if the word is in the trie. */
  public boolean search(String word) {
    TrieNode pre = head;
    for (char ch : word.toCharArray()) {
      if (!pre.containsKey(ch)) {
        return false;
      }
      pre = pre.get(ch);
    }
    return pre.isEnd();
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   */
  public boolean startsWith(String prefix) {
    TrieNode pre = head;
    for (char ch : prefix.toCharArray()) {
      if (!pre.containsKey(ch)) {
        return false;
      }
      pre = pre.get(ch);
    }
    return true;
  }
}

class TrieNode {

  private TrieNode[] links;

  private boolean isEnd;

  public TrieNode() {
    links = new TrieNode[26];
  }

  public boolean containsKey(char ch) {
    return links[ch - 'a'] != null;
  }

  public TrieNode get(char ch) {
    return links[ch - 'a'];
  }

  public void put(char ch, TrieNode node) {
    links[ch - 'a'] = node;
  }

  public void setEnd() {
    isEnd = true;
  }

  public boolean isEnd() {
    return isEnd;
  }
}
/**
 * Your Trie object will be instantiated and called as such: Trie obj = new
 * Trie(); obj.insert(word); boolean param_2 = obj.search(word); boolean param_3
 * = obj.startsWith(prefix);
 */
// @lc code=end

```
