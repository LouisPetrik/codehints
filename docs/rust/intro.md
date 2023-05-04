---
title: Introduction to Rust 
slug: /category/rust
sidebar_position: 1
--- 


# Introduction to Rust

Rust is a systems programming language developed by Mozilla. Its goal is to provide a safer and more efficient alternative to C and C++. The language combines low-level control over system resources with high-level abstractions, making it well-suited for a wide range of applications. These include operating systems, web servers, and game engines. Rust's key feature is its ownership system, which enables the compiler to ensure memory safety and prevent common programming errors such as null pointer dereferences and data races. This makes Rust an excellent choice for building reliable and secure software. Additionally, Rust's syntax is modern and expressive, with features such as pattern matching and functional programming constructs that can make code more concise and easier to read.

While Rust is still very young, it is already used in many production-level projects. Examples are: 
- Firefox: Rust is used here for things like the rendering engine
- Brave Browser: The Chrome-based browser, known for its default ad and spy-blocker uses Rust for its engine. 
- Tokio: Tokio is an asychronous runtime, used in the JavaScript platform Deno 
  

Ready to dive into Rust? Here is the [getting started guide](/rust/getting-started). 


## Code examples 
Let's go over some examples of ReScript in action. Admittedly, hello world in ReScript isn't that spectacular. 
To log something, the JS-package is used, which holds bindings for pure JavaScript functions. 

### Hello world 

```rust
fn main() {
    println!("Hello world!");
}
```


### Fibonacci Sequence 

```rust
fn main() {
    let mut a = 0;
    let mut b = 1;
    for _ in 0..20 {
        println!("{}", b);
        let c = a + b;
        a = b;
        b = c;
    }
}
```


### Factorial calculation 

```rust
fn factorial(n: u64) -> u64 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn main() {
    let n = 5;
    println!("{}! = {}", n, factorial(n));
}
```


### Reading and writing files 

```rust
use std::fs::File;
use std::io::{BufRead, BufReader, Write};

fn main() {
    let input_file = File::open("input.txt").expect("Failed to open input file");
    let output_file = File::create("output.txt").expect("Failed to create output file");
    let mut writer = std::io::BufWriter::new(output_file);
    let reader = BufReader::new(input_file);
    for line in reader.lines() {
        let line = line.unwrap().to_uppercase();
        writeln!(writer, "{}", line).expect("Failed to write to output file");
    }
}
```

