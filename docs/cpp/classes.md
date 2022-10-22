---
title: Classes in C++
---

# Classes
By default, all properties of a class are kept private, therefore not visble outside of the scope. 

```cpp 
class Position {
  public:
    int x, y;
};

int main(int argc, const char * argv[]) {
  Position position;
  position.x = 10;
  position.y = 10;
}
```

We can call functions from classes, once we create an instance of it: 

```cpp
class Person {
  public:
    string getName() {
      return "Max";
    }
};

int main() {
  Person max;
  cout << max.getName() << endl;
  return 0;
}
```

## Static methods 

```cpp
class Person {
  public:
    static void greet(string name) {
      cout << "Hello, " << name << endl;
    }
};

int main() {  
  Person::greet("Max");

  return 0;
}
```

Instead of writing instance.greet() we now address the name of the class, and call the function directly. Therefore, we no longer need 
an instance to call this function.  
The same works for variables inside the class. 

## Creating objects 



## The constructor 

The constructor is run when the object is created. By default, there is always a constructor, but the default one does nothing. 
Let's create a custom constructor: 

```cpp
class Person {
  public:
    Person() {
      cout << "Person object is created" << endl;
    }
};
// ......
Person max; 
```

Making the class static-only and not allowing creating instances: 
```cpp
class Log {
  private:
    Log();
  public:
    static void greet() {
      cout << "hello" << endl;
    }
};
```

Now, trying to create an instance of this class will always lead to an error. 

## The destructor

The destructor is create like the constructor, just with a "~" before the name. In this example, as the function creates the instance, once the function 
is done and removed from the stack, the object is deleted. 

```cpp
class Log {
  public:
    ~Log() {
      cout << "Object will be deleted" << endl;
    }
};

void createObject() {
  Log logger;
}

int main() {
  createObject()

  return 0;
}
```

Calling the destructor manually is possible, but not recommended and very rare: 
```cpp
logger.~Log(); 

```