# UON Language Support

Provides UON Language support to Visual Studio Code.

UON ™ (short for Unified Object Notation) is a serialization format that aims to bring together the best features of all available serialization formats out there, to create the one to unify them all.

## Features
<!---
TODO : GIF
ex :
![screencast](https://raw.githubusercontent.com/redhat-developer/vscode-yaml/main/images/demo.gif)
-->

1. Syntax highlight:
    * Provides syntax highlighting
2. Document outlining (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>):
    * Provides the document outlining of all completed nodes in the file
3. Auto completion (<kbd>Ctrl</kbd> + <kbd>Space</kbd>):
    * Provides possible completions for collections, types and their properties, and units 
    * Auto completes on writing or on command
4. Hover support:
    * Hovering over a node shows description *if existed*
5. Lint:
    * Detects if token are missing or false
    * Offers suggestions [WIP]

## Acknowledgement
The grammar and the parser for UON for this library have been implemented using [Antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts).

The autocompletion has been implement with the excellent [c3 engine](https://github.com/mike-lischke/antlr4-c3).

## How to contribute
<!---
TODO

The instructions are available in the [contribution guide](CONTRIBUTING.md).
-->