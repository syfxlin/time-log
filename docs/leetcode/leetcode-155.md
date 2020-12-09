# [155]最小栈

> [最小栈](https://leetcode-cn.com/problems/min-stack/description/)

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x)-- 将元素 x 推入栈中。
- pop()-- 删除栈顶的元素。
- top()-- 获取栈顶元素。
- getMin() -- 检索栈中的最小元素。

**示例:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

## 思考

每次入栈 2 个元素，一个是入栈的元素本身，一个是当前栈元素的最小值 \* 如：入栈序列为 2-3-1，则入栈后栈中元素序列为：2-2-3-2-1-1 \* 用空间代价来换取时间代价

另外不能存储 min 的数据然后来计算 min，因为有可能 min 会在 push 之前出栈，所以 min 需要即时获取

## 思考

```java
import java.util.Stack;

/*
 * @lc app=leetcode.cn id=155 lang=java
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {

  Stack<Integer> stack;

  /** initialize your data structure here. */
  public MinStack() {
    stack = new Stack<>();
  }

  public void push(int x) {
    int min;
    if (stack.isEmpty()) {
      min = x;
    } else {
      min = stack.peek() < x ? stack.peek() : x;
    }
    stack.push(x);
    stack.push(min);
  }

  public void pop() {
    stack.pop();
    stack.pop();
  }

  public int top() {
    return stack.get(stack.size() - 2);
  }

  public int getMin() {
    return stack.peek();
  }
}
/**
 * Your MinStack object will be instantiated and called as such: MinStack obj =
 * new MinStack(); obj.push(x); obj.pop(); int param_3 = obj.top(); int param_4
 * = obj.getMin();
 */
// @lc code=end

```
