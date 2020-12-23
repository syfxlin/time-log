---
title: 建造者模式
date: 2020-12-23
categories:
  - 设计模式
tags:
  - 概念
---

## 介绍

造者模式将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构建细节。建造者模式属于对象创建型模式。

## 内部建造者

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/builder/UserBuilder.java)

内部建造者使用内部类定义建造者，省略掉了指挥者和抽象建造者，此建造者只建造具体的类对象。

## 外部建造者

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/builder/outer_builder)

通常情况下我们使用建造者只会建造一种对象，而在一些情况下，我们需要更加复杂的构建，若使用内部类则会导致耦合度高，此时就可以将其分离出来，降低耦合度。
