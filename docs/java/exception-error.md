---
title: Exception 和 Error
date: 2020-11-28
categories:
  - Java
tags:
  - 概念
---

## 相同点和不同点

Exception 和 Error 都是继承 Throwable 类，可以被抛出（throws）或捕获（try-catch）。

Exception 是程序运行中可以预见的错误，可能并且应该被捕获并进行处理。

Error 是指在正常情况下不太可能出现的情况，绝大多数情况下的 Error 都会导致 JVM 处于非正常、不可恢复的状态，常见的如 StackOverflowError，OutOfMemoryError 等。

## 两种类型的 Exception

Exception 又分为检查和非检查两种。

检查异常需要显式的捕获，是编译检查的一部分，如果没有处理则无法通过编译，如 SQLException，IOException。

非检查异常都继承于 RuntimeException ，非检查异常无需在代码中显式的捕获处理，通常是可以通过编码避免的错误，具体应按需求判断是否需要捕获，如 NullPointerException。

## 在编码中应避免的做法

- 捕获如 Exception，Error，Throwable 等通用异常，因为这会让协作变得困难，同时也很难保证能处理一些难以处理的异常，如 OOM。
- 不要生吞异常，因为这会导致出现异常后难以处理的状况，如果不抛出异常，那么也应该在日志中记录。同时也不要使用 `e.printStackTrace()` 这种方式输出异常信息，因为在分布式的系统中，使用这种方式输出的信息，我们无法判断输出到哪里。
- 不要将 try-catch 包住大段的代码，因为 try-catch 会产生额外的性能开销，同时也会影响 JVM 对代码进行优化。
- 不要利用 try-catch 来做流程控制，因为这比 if/switch 低效。
- JVM 在处理异常的时候会进行栈快照，如果异常频繁触发，那么性能的开销就不容忽视了。
- 现在的反应式（异步）编程不能简单的将异常抛出，因为代码堆栈不再是垂直的了，往往抛出的只是特性的执行器调度器的堆栈。处理这种情况的方式就如同 JavaScript 中的 Promise.reject，即将异常进行封装传递，在 XK-Java 中的 Aop 也有体现。

## Java 异常类图

![Java 异常类图](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/11/20201128195833.png)

## 捕获异常

```java
class Test {

  public static void main(String[] args) {
    try {
      // ...
    } catch (NullPointerException e) {
      // ...
    }
  }
}

```

```java
class Test {

  public static void main(String[] args) {
    try {
      // ...
    } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {
      // ...
    }
  }
}

```

```java
class Test {

  public static void main(String[] args) {
    try {
      // ...
    } catch (NullPointerException e) {
      // ...
    } catch (ArrayIndexOutOfBoundsException e) {
      // ...
    }
  }
}

```

```java
class Test {

  public static void main(String[] args) {
    try {
      // ...
    } catch (NullPointerException e) {
      // ...
    } finally {
      // do close or release
    }
  }
}

```

```java
import java.io.ByteArrayInputStream;
import java.io.IOException;

class Test {

  public static void main(String[] args) {
    // try-with-resource auto close
    try (ByteArrayInputStream in = new ByteArrayInputStream("str".getBytes())) {
      // ...
    } catch (IOException e) {
      // ...
    }
  }
}

```
