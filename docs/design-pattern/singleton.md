---
title: 单例模式
date: 2020-12-21
categories:
  - 设计模式
tags:
  - 概念
---

## 介绍

单例模式指一个类只允许创建一个对象（或者实例），那这个类就是一个单例类，这种设计模式就叫作单例设计模式，简称单例模式。常用于全局唯一的场景，如工具类。

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
