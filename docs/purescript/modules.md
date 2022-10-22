---
title: Modules in PureScript 
---

# Modules

Modules are the way to split up our code into multiple files. Here is an example of writing a function in
a file, and importing it in our main-module (Main.purs)

Tests.purs:

```haskell
module Tests where

import Prelude
import Effect (Effect)
import Effect.Console (log)

print :: Effect Unit
print = do
  log "from Tests.purs!"
```

Main.purs:

```haskell
module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)

import Tests as Tests

main :: Effect Unit
main = Tests.print
```