---
title: 单例模式
date: 2020-12-21
categories:
  - 设计模式
tags:
  - 概念
---

## 介绍

**意图**：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

**主要解决问题**：一个全局使用的类频繁地创建与销毁。

**实现方式**：判断系统是否已经有这个单例，如果有则返回，如果没有则创建。

**关键代码**：构造函数是私有的。

**优点**：

1. 在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。
2. 避免对资源的多重占用（比如写文件操作）。

**缺点**：没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。

**使用场景**：

1. 要求生产唯一序列号。
2. 创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。

## 饿汉式

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/singleton/SimpleSingleton.java)

饿汉式的实现很简单，在类加载的时候，由 JVM 自动初始化实例，初始化的过程由 JVM 保证线程安全。不过这种方式也意味着不支持延迟加载，当类被加载进内存的时候，实例就创建完毕了。从上面的特点可以看到，当实例占用的资源多的时候，提前初始化实例其实是浪费的行为。

## 懒汉式

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/singleton/LazySingleton.java)

懒汉式在调用获取实例的方法的时候才进行初始化，支持懒加载，不过为了保证线程安全，我们需要在获取实例的方法加锁，防止多次初始化。缺点也很明显，懒汉式的锁粒度太粗了，获取实例的方式是同步的，如果被频繁的使用，就有可能会导致性能瓶颈。

## 双重检查

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/singleton/DclSingleton.java)

双重检查是在懒汉式的基础上进行改进的，支持懒加载，同时尽可能的减少锁粒度，通过双层的判断，只有在初始化的时候才会进行同步，一旦初始化完成，就不需要再加锁了。同时需要注意，除了双重检查，我们还需要给 instance 成员变量加上 volatile 关键字，禁止指令重排序。缺点是实现起来相对麻烦。

## 静态内部类

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/singleton/StaticClassSingleton.java)

静态内部类的实现方式有点类似饿汉式，但支持懒加载。那么它为什么能实现懒加载呢？我们知道只有当 new 类，Class.forName()，类.class 等方式取得 Class 对象或调用类的时候 JVM 才会加载类到内存中，同时进行初始化等操作。而静态内部类就是类似的实现，当我们调用获取实例的方法，才会对内部类进行操作，此时内部类才会被加载进内存进行初始化操作。所以支持延迟加载，同时也保证了线程安全。

## 枚举

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/singleton/EnumSingleton.java)

枚举的方式则更为简单，同时兼顾了延迟加载和线程安全，而且保证了反序列化时也不会创建新的对象。是最优的使用方式。
