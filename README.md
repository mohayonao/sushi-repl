# SUSHI-REPL
> Yet Another JavaScript REPL

## REPL
A Read-Eval-Print-Loop (REPL) is available both as a standalone program and easily includable in other programs. The REPL provides a way to interactively run JavaScript and see the :sushi:. It can be used for debugging, testing, or just trying things out.

SEE ALSO: [REPL Node.js v0.10.29 Manual & Documentation](http://nodejs.org/api/repl.html)

![sushi-repl](https://raw.githubusercontent.com/mohayonao/sushi-repl/master/sushi-repl.gif)

## Installation

```shell
% npm install -g sushi-repl
```

## Getting Started

REPL:

```shell
% sushi-repl
```

Node Module:

```javascript
var sushiREPL = require("sushi-repl");

sushiREPL.start({ prompt: "寿司 >" });
```

## Examples
CoffeeScript with Sushi REPL
```coffee
#!/usr/bin/env coffee
coffeeREPL = require 'coffee-script/lib/coffee-script/repl'
sushiREPL  = require 'sushi-repl'

coffeeREPL.start
  writer: sushiREPL.writer
```
