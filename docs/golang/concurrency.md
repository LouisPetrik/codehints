# Concurrency

In this example, there will never be "fish" printed.
Code will print sheep forever, because Go is blocking.

```go

func main() {
   count("sheep")
   count("fish")
}

func count(thing string) {
   for i := 1; true; i++ {
      fmt.Println(i, thing)
   }
}
```

We can create a go-routine, making the function execute at the same time with the go-keyword.
Now both will be executed, sheep, fish, sheep and so on.

```go
func main() {
   go count("sheep")
   count("fish")
}
```

When we make both functions a go-routine, the programm will finish instantly. Why? Because the go-routine takes the function into the background, and then continues to execute the code below.
When the second count() function also is a go routine, the main function is done.

We can avoid this by setting a Sleep or wait for userinput. Such code will block the further execution. In this example, sheep and fish will be printed for 2 seconds, then the code stops.

```go
func main() {
   go count("sheep")
   go count("fish")
   time.Sleep(time.Second * 2)
}
```

## Wait Groups

A wait group is the count of go routines, that should be executed in the code. They help us to manage all the ones running, and can be used to avoid the programming breaking before it should stop.
Here is a good example:

```go
import (
   "fmt"
   "sync"
   "time"
)

func main() {
   var wg sync.WaitGroup
   wg.Add(1)

   go func() {
      countFish("Fish")

      wg.Done()
   }()

   go func() {
      countSheep("Sheep")
   }()

   wg.Wait()
}


func countFish(thing string) {
   for i := 1; i <= 5; i++ {
      fmt.Println(i, thing)
      time.Sleep(time.Millisecond * 500)
   }
}

func countSheep(thing string) {
   for i := 1; i <= 10; i++ {
      fmt.Println(i, thing)
      time.Sleep(time.Millisecond * 500)
   }
}
```

countFish is only executed 5 times. Since both function executions are go-routines, but we said that there is only one routine in the code, the wg.done() will decrease the waiting-counter. Therefore, after countFish is done, the main-functions ends, the programm is done - but Sheep is only printed 6 times till then, even though, we want to run it till i <= 10.

To avoid this, we can must count countSheep as a routine in the waiting ones too:

```go
func main() {
   var wg sync.WaitGroup
   wg.Add(2)

   go func() {
      countFish("Fish")
      wg.Done()
   }()

   go func() {
      countSheep("Sheep")
      wg.Done()
   }()

   wg.Wait()
}
```

Now, when countFish is done, the couter still has 1 as value, so waits until countSheep is done too.