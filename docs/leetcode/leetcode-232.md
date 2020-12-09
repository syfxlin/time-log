# 用栈实现队列

> https://leetcode-cn.com/problems/implement-queue-using-stacks/

使用栈实现队列的下列操作：

```
push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
```

示例:

```
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
```

说明:

- 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
- 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

# 思考

用栈实现队列的方案其实很简单，就是用两个栈，可以在 push 的时候调整也可以在 pop 的时候调整，调整的方案就是将一个栈的元素逐一弹出并逐一添加到另外一个栈，则数据的方向就发生了改变，对应 pop 或者 push 的方向就是队列对应的方向了。

## 代码

```java
import java.util.Stack;

/*
 * @lc app=leetcode.cn id=232 lang=java
 *
 * [232] 用栈实现队列
 */
class MyQueue {

  Stack<Integer> stack;

  /** Initialize your data structure here. */
  public MyQueue() {
    stack = new Stack<Integer>();
  }

  /** Push element x to the back of queue. */
  public void push(int x) {
    Stack<Integer> s = new Stack<Integer>();
    while (!stack.empty()) {
      s.push(stack.pop());
    }
    stack.push(x);
    while (!s.empty()) {
      stack.push(s.pop());
    }
  }

  /** Removes the element from in front of queue and returns that element. */
  public int pop() {
    return stack.pop();
  }

  /** Get the front element. */
  public int peek() {
    return stack.peek();
  }

  /** Returns whether the queue is empty. */
  public boolean empty() {
    return stack.empty();
  }
}
/**
 * Your MyQueue object will be instantiated and called as such: MyQueue obj =
 * new MyQueue(); obj.push(x); int param_2 = obj.pop(); int param_3 =
 * obj.peek(); boolean param_4 = obj.empty();
 */

```
