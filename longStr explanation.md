## Longest substr
  
> Given a string s, find the length of the longest substring without repeating characters.
  
    
This problem was fairly simple for me to visualize. I wrote some basic pseudocode for a brute force solution. The main loop was something like this:
    `check if the current substring we were checking contained the character we were checking - if not add the character to the substring` 
    `If so, we check if the substring so far is the longest we've looked at.`
    `If it is the longest, we update the longest.`
    `Either way, start checking the string from one character ahead of the duplicate`

The most brute force possible solution would be to take all possible substrings and check whether they had duplicates, starting with the longest substring.  
My initial solution was much better than this (The most brute force solution is O(n^3), mine was O(n^2)), because I was able to reduce the problem space.
We do not need to check substrings we have already checked - by starting from the first character and moving forward looking for a duplicate, we will always
be either looking at or have looked at the longest possible substring without duplicates.  
  
  
Our worst case is having to check every single character in the string (which is O(n)). Because checking if a string contains a character by default is O(n), our
total worst case complexity is O(n^2). It is possible to achieve a lower complexity of about O(n) by integrating a hash data structure - as hashes have an O(1) search.
Hashes are data sets that use a key to represent where they are found - for example, lets say we use the ASCII value as our hash. This means we will need an array with 128 characters.
For example, if we were looking at the letter n, with a unicode value of 111, we would update the value of our array[111] to be +1, as we have encountered an N.
The pseudocode for this loop would look something like:  
    `take the ASCII value of the current character`  
    `update the value of our hash array at the index corresponding to the ascii value to +1`  
    `check if the value at this index is greater than 1`  
    `if so, remove any characters that appeared before the duplicate and the duplicate from the hash`
    `if this was the longest, we update the longest`

The main complication with this is that, as we are tracking letters, we need to track what letters came before which to efficiently update the hash. For this, we could map the characters to their index - 
for example, if I have a letter n at index 12, I would instead of storing 1 as the value at array[111], store the value 12. Then we simply wipe the hash when we find a value, and start from the value + 1 - while we 
would have some overlap, the efficiency of the O(1) search still makes this the best method by far.