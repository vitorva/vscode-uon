# UON Language Support

Provides UON Language support to Visual Studio Code.

UON ™ (short for Unified Object Notation) is a serialization format that aims to bring together the best features of all available serialization formats out there, to create the one to unify them all.

## Features
1. Syntax highlight:
    * Provides syntax highlighting
2. Document outlining (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>):
    * Provides the document outlining of the file
3. Auto completion (<kbd>Ctrl</kbd> + <kbd>Space</kbd>):
    * Provides possible completions for collections, units, types and their properties  
4. Hover support:
    * Hovering over a node shows its description *if it exists*
5. Lint:
    * Detects if token are missing or false

## How to launch the project locally

First run :  
```bash
  npm install
```
Then open the project ans press `F5` to open a new window with your extension loaded.

## ANTLR grammar
If you change the [grammar file](src/grammar/UON.g4),
you need to re-generate the antlr files used by the extension by running :
```bash
  npm run antlr4ts
```

## Acknowledgement
The parser for UON have been implemented using [antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts).

The autocompletion has been implemented with the excellent [c3 engine](https://github.com/mike-lischke/antlr4-c3).

