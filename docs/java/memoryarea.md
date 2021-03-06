---
title: 内存区域
date: 2020-12-08
categories:
  - Java
tags:
  - 概念
---

![内存区域图](https://cdn.jsdelivr.net/gh/syfxlin/pic/2020/12/20201208084741.png)

## 程序计数器 PC

程序计数器会存储当前线程正在执行的 Java 方法的 JVM 指令地址；或者，如果是在执行本地方法，则是未指定值（undefined）。

## Java 虚拟机栈

每个线程在创建时都会创建一个虚拟机栈，其内部保存一个个的栈帧（Stack Frame），对应着一次次的 Java 方法调用。

栈帧中存储着局部变量表、操作数（operand）栈、动态链接、方法正常退出或者异常退出的定义等。

## 堆

堆是 Java 内存管理的核心区域，用来放置 Java 对象实例，几乎所有创建的 Java 对象实例都是被直接分配在堆上。

堆是 GC 重点光顾的区域，有新生代、老年代的划分。

## 方法区

方法区是所有线程共享的一块内存区域，用于存储所谓的元（Meta）数据。如类结构信息，以及对应的运行时常量池、字段、方法代码等。

## 运行常量池

这是方法区的一部分，常量池可以存放各种常量信息，不管是编译期生成的各种字面量，还是需要在运行时决定的符号引用，所以它比一般语言的符号表存储的信息更加宽泛。

## 本地方法栈

本地方法栈和 Java 虚拟机栈是非常相似的，支持对本地方法的调用，也是每个线程都会创建一个。其存在的位置取决于技术的实现，比如 Oracle Hotspot JVM 的本地方法栈是和 Java 虚拟机栈是同一位置。
