---
title: String、StringBuffer 和 StringBuilder
date: 2020-11-29
categories:
  - Java
tags:
  - 概念
---

## String

Java 中的 String 不同于 C++，它是类而不是基本数据类型。

String 是不可变类，不能被继承，里面的属性也都是不可变的。由于不可变性，所以任何的写操作都会创建一个新的 String 对象，同时也赋予了 String 原生支持线程安全。每次操作都会创建新对象，并把旧对象的内容复制到新对象上，所以对性能有影响。多数情况下不需要考虑拼接造成的性能损失，因为 Java 编译器会将显示的字符串拼接转换成 StringBuilder，使用的场景一般是用在循环中。

## StringBuffer

StringBuffer 是为了解决写操作过于频繁而提供的类。可以使用 append 等方法对字符串进行操作，操作时不会每次都创建新的对象。StringBuffer 也有扩容的机制，所以如果事先知道字符串的长度可以提前设置，避免扩容带来的性能损失。StringBuffer 是线程安全的，所有会有性能损失，如果不需要线程安全那么应该使用 StringBuilder。StringBuffer 保证线程安全的方式是在各种写操作的方法上加上 synchronized 关键字，非常简单粗暴，不过也带来了易维护易阅读的好处。

## StringBuilder

StringBuilder 是在 JDK 5 后新增的类，StringBuilder 和 StringBuffer 一样，只是去掉了线程安全的的部分。由于没有线程安全的损失，在大部分情况下应优先使用。

## 一些乱七八糟的东西

三者的底层都是利用 char 或 byte 数组实现存储字符串的。

getBytes 和 String 相关的转换时根据业务需要建议指定编码方式，如果不指定则看看 JVM 参数里有没有指定 fle.encoding 参数，如果 JVM 没有指定，那使用的默认编码就是运行的操作系统环境
的编码了，那这个编码就变得不确定了。

Java 为了避免在一个系统中产生大量的 String 对象，引入了字符串常量池。其运行机制是：创建一个字符串时，首先检查池中是否有值相同的字符串对象，如果有则不需要创建直接从池中刚查找到的对象引用；如果没有则新建字符串对象，返回对象引用，并且将新创建的对象放入池中。但是，通过 new 方法创建的 String 对象是不检查字符串池的，而是直接在堆区或栈区创建一个新的对象，也不会把对象放入池中。
