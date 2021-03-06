---
title: 装饰器模式
date: 2020-12-28
categories:
  - 设计模式
tags:
  - 概念
---

## 介绍

**意图**：动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。

**主要解决问题**：一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。

**实现方式**：将具体功能职责划分，同时继承装饰者模式。

**关键代码**：用组合代替继承，将源对象传入装饰类中。

**优点**：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。

**缺点**：多层装饰比较复杂。

**使用场景**：

1. 扩展一个类的功能。
2. 动态增加功能，动态撤销。

## 代码

[代码](https://github.com/syfxlin/code/blob/master/design-pattern-java/src/main/java/me/ixk/design_pattern/decorator)
