---
title: Introduction to Java
sidebar_position: 1
slug: /category/java
---

<img src="https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg" alt="Java" width="192"/>

<br/>
<br/>

# What is Java?

Java is one of the most popular programming languages of the 21th century.
The object-oriented programming language was created by Oracle in 1995, and can be used for many different
purposes. It might be the programming language that pushed the object-oriented style of programming the most, and is pretty
infamous for its boilerplate-loaded way of printing hello world.

Java is often referred to as very slow, due to its compiler-interpreter model. Yet, this is not true anymore. Java is actually able to 
run code very fast and in some scenarios not much slower than C++ or C. 


## Hello World in Java

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
```

You can execute it with running

```bash
javac Main.java && java Main
```

## Other code examples 

### A basic class in Java

```java
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
```
This example is taken from [w3schools](https://www.w3schools.com/java/tryjava.asp?filename=demo_class). 

## Getting started with Java 

To get started, you need to install the Java SE for your machine. You can download a version [here](https://www.oracle.com/de/java/technologies/downloads/).

Once installed succesfully, open your terminal or CMD and run <code>java</code>. 
In case it prints a ton of text, Java is installed succesfully on your machine. 


### Running Hello world 

Up next is creating and running your fist Java program. 
Create a file called Main.java. Paste the contents for the hello world program shown above into the file. 
Once saved, you can compile it with: <code>javac Main.java</code>. 

Now, Java compiled the program to bytecode for the virtual machine of Java. The bytecode is in the file "Main.class" and is not human-readable. 
This VM can now run the program:

<code>java Main</code>. 

There you go! You just created your first Java program. 


## Author's Notes

I had to learn it for multiple courses in University and never really liked it. Especially not, because Java really forces object oriented programming onto the programmer. Yet, one must admit that Java is evolving and isn't too bad for beginners.

## Sources

As the source, the official documentation is used.
