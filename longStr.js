var lengthOfLongestSubstring = function(s) {
    longestSubStr = 1;
    subStrStart = 0;
    //loop - use substrfinish as iterative, loop to s.length
        //is the var at the current position in the string a duplicate? - check this by checking if the string between subStrStart and subStrFinish contains the value at subStrFinish
            //if so, is the difference between substr start and finish greater than longest substr?
                //if so, set difference to longest substr
                //either way, change the value of substr start to be the position of the duplicate + 1
            //if not, keep looping.
    //check if longestSubStr is 0 - this means we never found a duplicate and the longest substr is just s.length.
    if(s.length == 0){return 0;}
    for(var subStrFinish = 1; subStrFinish < s.length; subStrFinish++){
        inString = isInString(subStrStart,subStrFinish, s)
        if(inString != -1){
            if(subStrFinish - subStrStart > longestSubStr){
                longestSubStr = subStrFinish - subStrStart               
                }
            subStrStart += inString + 1;
        }
    }
    if((subStrFinish - subStrStart )> longestSubStr){
        longestSubStr = subStrFinish - subStrStart;
    }
    return longestSubStr;
}
var isInString = function(start, finish, s) {
  var substr = s.substring(start,finish);
  var latestChar = s.charAt(finish);
  console.log(substr +  " char checking " + latestChar + " found at : " + substr.indexOf(latestChar));
    return(substr.indexOf(latestChar));
}
console.log(lengthOfLongestSubstring("aab"));