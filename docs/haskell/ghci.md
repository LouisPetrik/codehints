## GHCI

The Glasgow Haskell compiler 

Starting it: 

```bash 
ghci 
```

Executing a hello-world file (main.hs): 

```haskell 
main :: IO ()
main = putStrLn "Hello World"
```

When you saved your file, we can open it in GHCI like this: 
```bash
ghci main.hs
```

Alternatively, you can start GHCI first, and then import your module main.hs:

```bash
ghci 
:load main
```

No, your file won't execute right now - opening like this kind of loads your file into GHCI, so that you can now play around with it. To execute it, type "main" and press enter, and you should see the output. 

If you change something in the file, and want to run it again with GHCI opened, run: 

```bash
:reload 
main
```

Compiling your Haskell file to an executeable: 

```bash
ghc main.hs

./main.o
```

Instead of compiling to run it, you can also use "runhaskell" to run your program instantly. 

```bash
runhaskell main.hs
```

Getting the function signature of something: 

```haskell
:type head 
---head :: [a] -> a
```

To quit GHCI:
```bash
:quit
```