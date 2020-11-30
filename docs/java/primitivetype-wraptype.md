---
title: 原始数据类型、包装数据类型
date: 2020-11-30
categories:
  - Java
tags:
  - 概念
---

## 原始数据类型

虽然 Java 号称一切皆对象，但是在 Java 中原始数据类型并不是对象。由于只是基本的数据类型，所以只提供了基本的操作，如加减等。

原始数据类型的变量，显然要使用并发相关手段，才能保证线程安全。如使用锁或者替换成 `java.util.concurrent.atomic` 包中对应的 `Atomic` 并发包装类。部分比较宽的数据类型，比如 float、double，甚至不能保证更新操作的原子性，可能出现程序读取到只更新了一半数据位的数值。

## 包装数据类型

包装类型即对应原始数据类型的对象类，使用和原始数据类型类似，但提供了一些原始数据类型不具备的功能，如转换字符串类型，进制转换等。

包装类型和 String 一样都是不可变类型，这样就保证了线程安全。

包装类型都有值缓存，通过值缓存可以避免频繁的创建相同的对象，如 Boolean 的 TRUE 和 FALSE。不过需要注意的是直接 new 对象不会使用值缓存，应使用 valueOf。自动装箱使用的是 valueOf，所以也会使用到值缓存。不同类型有不同范围的值缓存，如 Boolean 是 [TRUE,FALSE]，Short 是 [-128,127]

## 自动装箱、拆箱

自动装拆箱实际上算是一种语法糖。Java 会在编译时自动进行一些转换，以保证不同写法在运行时等价（即字节码是一致的）。

那么 Java 编译器是如何操作的呢？我们就拿以下一段代码来看看吧：

```java
public class Main {

  public static void main(String[] args) {
    Integer num = 1;
    int unbox = num + 1;
  }
}

```

通过 jclasslib 工具查看 `main` 方法的字节码如下

```
 0 iconst_1
 1 invokestatic #7 <java/lang/Integer.valueOf>
 4 astore_1
 5 aload_1
 6 invokevirtual #13 <java/lang/Integer.intValue>
 9 iconst_1
10 iadd
11 istore_2
12 return
```

可以看到在 `Integer num = 1` 这句语句时候，Java 实际上是执行了 `Integer num = Integer.valueOf(1)` 这就是自动装箱。而在 `int unbox = num + 1` 的时候，Java 实际上是执行了 `int unbox = num.intValue() + 1` 这就是自动拆箱。

虽然自动拆箱和自动装箱的步骤并不复杂，也有值缓存，但是我们也应该避免不必要的拆箱和装箱，因为即使很小的差距在数量庞大的情况下，差距也会被放大。
