/**
 * param {number[]} nums - an array of integers taken as input
 * param {number} target - a singular integer taken as input
 * return {number[]} - an array of 2 integers, representing indices of two numbers from the 'nums' parameter, where those two numbers add up to the 'target' parameter.
 */
//twoSum - returns an array of length 2 (as there can only be one valid answer), with the two values from the vector nums that sum to the integer target)
var twoSum = function(nums, target) {
    returnIndices = new Array(2);
    console.log(returnIndices[1] == returnIndices[0]);
    //iterates through nums, checking each integer if adding it with previously unchecked integers will sum to target
    for(let curNumIndex = 0; curNumIndex < nums.length - 1; curNumIndex++){
        //we can set our second iterator to only check values farther in the array than our first iterator, as all earlier combinations will have already been checked. This reduces our complexity to O(n!)
        for(let curNumIndexTwo = curNumIndex + 1; curNumIndexTwo <= nums.length; curNumIndexTwo++){
            if(nums[curNumIndex] + nums[curNumIndexTwo] == target){
                returnIndices = [curNumIndex, curNumIndexTwo];
                //we set our iterators to the length of nums to break the loop, as our solution has been found
                curNumIndex = nums.length;
                curNumIndexTwo = nums.length;
            }
        }
    }
    return returnIndices;
};

//One thing to note; This solution assumes there is EXACTLY one solution - no less, no more.
//
//Should you wish to deal with the possibility of there being no solution, you would need to check after the second for loop has completed what the value of returnIndices is. 
// A simple way to do this is to check the return value when you call twoSum. If, for example, twoSum[0] is undefined, it would mean that returnIndices never got set to a solution, meaning there was no solution.
//
//For handling the case of multiple solutions, your array would need to have no maximum defined length (It currently has its length defined as 2.)
//