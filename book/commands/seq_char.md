---
title: seq char
categories: |
  generators
version: 0.71.0
generators: |
  Print sequence of chars
usage: |
  Print sequence of chars
---

# <code>{{ $frontmatter.title }}</code> for generators

<div class='command-title'>{{ $frontmatter.generators }}</div>

## Signature

```> seq char ...rest --separator --terminator```

## Parameters

 -  `...rest`: sequence chars
 -  `--separator {string}`: separator character (defaults to \n)
 -  `--terminator {string}`: terminator character (defaults to \n)

## Examples

sequence a to e with newline separator
```shell
> seq char a e
```

sequence a to e with pipe separator separator
```shell
> seq char -s '|' a e
```
