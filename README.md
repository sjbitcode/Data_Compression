Data_Compression
================

A simple Javascript program to compress and decompress a string of letters. 

This program implements a **compression algorithm** and a **decompression algorithm**.

## Compression
In this compression algorithm...

1. input is a string, 
2. output is a compressed string, 
3. To produce the compressed output, any run of two or more of the same
character should be converted to two of that character plus a number
indicating how many repeated runs were compressed. Examples:
  1. B   -> B
  2. BB  -> BB0
  3. BBB -> BB1
4. Compression must use one digit, so if you have a long input, it will be compressed like this:
  1. BBBBBBBBBBB   -> BB9
  2. BBBBBBBBBBBB  -> BB9B
  3. BBBBBBBBBBBBB -> BB9BB0

## Decompression
In this decompression algorithm...

1. input is a compressed string,
2. output is a decompressed string, 
3. Does the *reverse* of the compression algorithm. Here are some examples:
  1. B   -> B
  2. BB0 -> BB
  3. BB1 -> BBB
  4. ......
  5. BB9BB0 -> BBBBBBBBBBBBB

### Some examples to test:
* H -> H
* BAT -> BAT
* BBA -> BB0A
* AAAABBACCC -> AA2BB0ACC1


