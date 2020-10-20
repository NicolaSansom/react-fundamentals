# JSX

## Exercise

Use babel to transform into React API under the hood. Got understanding of what
transformations are happening under the hood.

Can use babel
[REPL](https://babeljs.io/repl#?builtIns=App&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&presets=react&prettier=true)
to how JSX is transformed. Can also use `type="text/babel"` along with a babel
script to transform code on the fly good when learning

1. React creates elements
2. React DOM puts the items on a page
3. Babel transforms JSX into react elements

## Extra credit

1. Curly brackets is transpiled JS instead of just JSX stopping the compiler
   from going anything to the contents.

Cannot pass statements as it does not make any sense to pass a statement to an
argument of a function call when looking at it composed within `createElement`

### Expression vs statement

An expression evaluates to a value. A statement does something.

```
>>> x + 2         # an expression
>>> x = 1         # a statement
>>> y = x + 1     # a statement
>>> print y       # a statement (in 2.x)
2
```

2. Anything after the spread `{...props}` will overide what is before it. This
   is the case using it in JSX and JS
