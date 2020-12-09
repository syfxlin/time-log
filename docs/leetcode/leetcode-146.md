# [146]LRU 缓存机制

> [LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/description/)

运用你所掌握的数据结构，设计和实现一个[LRU (最近最少使用) 缓存机制](https://baike.baidu.com/item/LRU "https://baike.baidu.com/item/LRU")。它应该支持以下操作： 获取数据`get`和 写入数据`put`。

获取数据`get(key)`\- 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。  
写入数据`put(key, value)`\- 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

**进阶:**

你是否可以在**O(1)**时间复杂度内完成这两种操作？

**示例:**

```
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```

## 思考

本题就是典型的链表题，但是普通的链表的查询效率并不高，所以需要通过 HashSet 来提高查询效率，Java 的标准库已经自带的 LinkedHashMap，所以就不需要自己来实现

## 代码

```java
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=146 lang=java
 *
 * [146] LRU缓存机制
 */

// @lc code=start
class LRUCache {

  int capacity;
  Map<Integer, Integer> map;

  public LRUCache(int capacity) {
    this.map = new LinkedHashMap<Integer, Integer>();
    this.capacity = capacity;
  }

  public int get(int key) {
    Integer re = map.get(key);
    if (re != null) {
      map.remove(key);
      map.put(key, re);
      return re;
    }
    return -1;
  }

  public void put(int key, int value) {
    if (map.containsKey(key)) {
      map.remove(key);
    } else if (map.size() >= capacity) {
      Iterator<Map.Entry<Integer, Integer>> it = map.entrySet().iterator();
      it.next();
      it.remove();
    }
    map.put(key, value);
  }
}
/**
 * Your LRUCache object will be instantiated and called as such: LRUCache obj =
 * new LRUCache(capacity); int param_1 = obj.get(key); obj.put(key,value);
 */
// @lc code=end

```
