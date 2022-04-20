## Add Two Nums
  
> You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.  
> You may assume the two numbers do not contain any leading zero, except the number 0 itself.  
  
    
For this problem, I first played around a bit with the lists provided and their functions - 
    `console.log(l1)`, where 'l1' is a linked list, output the entire list.  
    `console.log(l1.val)` output the value currently at the head of the list.  
    `console.log(l1.next)` output the entire list, with the head of the list moved to the second node.
  
  
Based on this, I decided that I would use a recursive function to start out with, as the alternative would be setting the lists equal to their 'next' value, which I felt would require extra work to begin with. It would be possible to change into a while loop later, if necessary.
I began drafting pseudocode for what the internal loop would need to be, with no edge cases. I got something like:  
    `add the values at the current heads of both lists`  
    `make a new ListNode, and set it equal to the sum from last line`  
    `set the ListNode as the next value in the linked list we're creating`  
    `advance all three linked lists with .next`  
  
From this, I began working on edge case scenarios. I found three:
- If the two digits being added add up to a value greater than 9 the sum will be two digits, which we can't properly represent with this method. My initial solution was to check for `sum > 10`, and if so, to subtract 10 from the sum, and set a carryover variable equal to 1.  
Then, I would bring the carryover variable to the next sum and add it, before setting it back to zero.  
To reduce code complexity, I recognized that the value of the carryover can always only be 1 or 0, as the maximum value that can be added for the first two digits will always be 9+9 = 18, as the carryover always starts as 0. This results in a carryover of 1, meaning subsequent sums have a maximum value of 9+9+1 = 19, which still has a carryover of 1. This meant I didn't need to check the value of the carryover - if there was carryover, it would be 1. 
  
- If one of the linked lists was shorter than the other, I would need to stop adding values from it and only sum the remaining linked list and the carryover.
I solved this with an `if` statement that checked if both linked lists hadn't reached the end yet. When one did, the respective `else if` statement checks if one of the linked lists hasn't reached the end, and if so,  
I had it begin a new recursive function, where it only summed the carryover and the remaining list's node.  
  
-If both lists ended but still had a carryover value, I needed to extend the list to add the carryover as a final value.  
For this, I just added another `else if` to both recursive functions - so if the lists had reached their ends, I checked if the carryover had a nonzero value. 
If so, I created a new node, set the value to 1, and set it as the solution list's next node. 

