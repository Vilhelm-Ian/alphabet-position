#!/usr/bin/env node

let letter = process.argv[2]?.toLowerCase();

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let index = alphabet.indexOf(letter);
if (index == -1) console.log("letter not in alphabet");
else console.log(index);
