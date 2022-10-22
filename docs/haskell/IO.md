---
title: Input and Output in Haskell 
---

# In and output 

When initialising records for example, you might have noticed that you are unable to print
them easily in GHCI. There is a simple solution to that. Derive Show so Haskell will know how to actually print your values: 

```haskell
data Dog = Dog
  { name :: String,
    race :: String,
    age :: Int
  }
  deriving (Show)

woody = Dog {name = "Woody", race = "Labrador", age = 12}
```

Then, in GHCI just type "woody" and the record will be printed. 


Here is how we can read input from the command line and output it directly: 

```haskell 
main = do
  putStrLn "Enter something: "
  userInput <- getLine
  putStrLn ("You entered: " ++ userInput)
```

Apart from putStrLn, which prints a string, followed by a new line, there are other functions for outputting: 

- putStr which does the same as putStrLn but doesn't create a new line 
- print which can take a value of any type, which is an instance of Show 


## mapM 

You might have wondered how to combine map & print. Hint, it does not work like this: 

```haskell 
map print [1, 2, 3]
```

This code will create a list of IO functions, but will not print 1, 2 and 3 seperately to the console. 

To solves this problem, mapM exists. It takes a function and a list, and will map the function over the list in sequence. 

```haskell 
mapM print [1, 2, 3]
1
2
3
```

## forever 

forever will forever repeat the I/O action

```haskell 
import Control.Monad

main =
  forever
    ( do
        putStr "Enter something"
        input <- getLine
        putStrLn input
    )
```


## getContents for input streams 

```haskell 
main = do
  pipeInput <- getContents
  putStr pipeInput
```

getContents expects us to provide an input stream, for example, via a UNIX pipe. 
For example, using cat: 

```bash 
cat somefile.txt | runhaskell main.hs 
```

Our Haskell code will print what stands inside our text file. 

## Reading files 

```haskell 
import System.IO

main = do
  fileHandle <- openFile "text.txt" ReadMode
  fileContent <- hGetContents fileHandle
  putStr fileContent
  hClose fileHandle
```

This will print all the content in the given file. 