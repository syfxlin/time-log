---
title: 接口、抽象类
date: 2020-12-05
categories:
  - Java
tags:
  - 概念
---

## 多继承

多继承即一个类继承多个父类。在 Java 中，类不支持多继承，但是接口可以继承多个接口，同时类也可以可以实现多个接口。之所以会出现这种情况是因为 Java 只支持声明多继承，而不支持实现多继承，即可以有多个声明（接口），但是不能有多个实现（父类）。

可以通过 JDK8 增加的接口默认方法实现类似多继承的效果。但是也有局限性，比如无法在接口中定义非静态的字段，构造器等。

## 接口

接口不能实例化，也不能有构造方法，不能包含非常量成员。任何字段都是 public static final 的。没有非静态方法的实现（JDK8 以后的可以支持默认方法）。

JDK8 后增加了默认方法，可以为方法添加默认的实现。JDK8 以前只能通过抽象类实现。

## 抽象类

抽象类和一般 Java 类没有特别大的区别，除了不能实例化。不能实例化，但是可以添加构造方法。可以定义抽象方法，也可以不定义。抽象类中的抽象方法必须在子类中实现。抽象类可以用来做静态工具方法的容器（不能实例化的特性）。

## Functional 接口

Functional 接口是 Java8 后新增的一种特性，用于支持 Lambda 语句。只有一个抽象方法的接口被成为 Functional 接口，Functional 接口可以直接使用 Lambda 语句定义实现。

```java
@FunctionalInterface
interface Fun {
  void apply();
}

class Main {

  public static void main(String[] args) {
    Fun fun = () -> {
      System.out.println("123");
    };
    fun.apply();
  }
}

```

建议使用 @FunctionalInterface 注解进行标注，但不是必须的。任何符合 Functional 接口的定义的接口都可以使用 Lambda 表达式。

内置接口（常用）：

- Predicate：传入一个参数，返回一个 bool 结果， 方法为 boolean test(T t)
- Consumer：传入一个参数，无返回值，纯消费。 方法为 void accept(T t)
- Function：传入一个参数，返回一个结果，方法为 R apply(T t)
- Supplier：无参数传入，返回一个结果，方法为 T get()
- UnaryOperator：一元操作符， 继承 Function,传入参数的类型和返回类型相同。
- BinaryOperator：二元操作符， 传入的两个参数的类型和返回类型相同， 继承 BiFunction
