/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//adds two linked lists together, in reverse fashion.
//most natural solution to me was a recursive function, that checks for the end of the list.
var addTwoNumbers = function(l1, l2) {
    //creates the head of the list ahead of time, to avoid potential issues
    listHead = new ListNode;
    return recursTwoNumbers(l1, l2, listHead, 0)
};

//function to recursively go through the two linked lists (l1, l2), add their values, and generate l3.
//carryOver represents if the sum of any two digits is greater than 9, as we will need a carryover bit to add the '1' to the next set of digits in the list.
//I used recursion here because it is simpler to write - to handle edge cases with a while loop, I would need a nested while loop.
var recursTwoNumbers = function(l1, l2, l3, carryOver){
    var sum = l1.val + l2.val + carryOver;
    carryOver = parseInt(sum / 10);
    l3.val = sum % 10;
    if(l1.next && l2.next){
        curNode = new ListNode;
        l3.next = curNode;
        recursTwoNumbers(l1.next, l2.next, l3.next, carryOver);
    }
    else if(l1.next || l2.next){
        curNode = new ListNode;
        l3.next = curNode;
        recursOneNumber(l1.next? l1.next : l2.next, l3.next, carryOver);
    }
    else if(carryOver == 1){
        curNode = new ListNode;
        curNode.val = 1;
        l3.next = curNode;
    }
    return l3;
}

var recursOneNumber = function(l1, l3, carryOver){
    var sum = l1.val + carryOver;
    carryOver = parseInt(sum / 10);
    l3.val = sum % 10;
    if(l1.next){
        curNode = new ListNode;
        l3.next = curNode;
        recursOneNumber(l1.next, l3.next, carryOver);
    }else if (carryOver == 1){
        curNode = new ListNode;
        curNode.val = 1;
        l3.next = curNode;
    }
    return l3;
}