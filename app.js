let ques=["Binary Search Algorithm – Iterative and Recursive Implementation",
    "Best Time to Buy and Sell Stock",
    "find element twise",
    "reverse element",
    "pair in an array",
    "sum of all subarray",
    "maximun subarray sum(brute forse/prefix/kadane)",
    "Trapping water",
    "rotate array search",
    "smallest element int rotate array",
    "inserttion sort",
    "selection sort",
    "counting sort",
    "merge sort",
    "quick sort",
    "heap sort",
    "spiral matrix/digonal sum",
    "search in rotate array",
    "transpose Matrix",
    "check String palindrome",
    "given a route connecting  4 directions(E,W,N,S) find the sortest path to reach destination'WNEENSNNN'",
    "largest number form an array {'3','30','34','5','9'}",
    "find largest String in the array",
    "the first letter of each word to upper case",
    "String compression('aabccdbdd->a2b2c2d3')",
    "reverse vowel and reverse words in a string",
    "check if a number even or odd using bit manipulation",
    "get ith bit/set ith bit/clear ith bit/update ith bit/clear range of bits in bit manipulation",
    "check if a  number is power of 2 or not",
    "count set bit in a number",
    "Fast exponencial",
    "convert Upercase to Lowercase use manipulation",
    "find array is sorted",
    "fast / last occcurance",
    "fibonacci / natural number",
    "print x to the power n (log n)",
    "tilling problem",
    "remove duplicate int a String",
    "Frinds pairing problem",
    "Binary String problem/Find string length",
    "find count of all contiguous subString starting and ending with same charecter",
    "tower of henoi",
    "mejority Element",
    "pandomize quick sort",
    "Inversion sort",
    "find and print all subset of a given String(ab-> a,b,ab)",
    "print all permutation of string(abc -> abc,acb,bca,bac,cab,cba)",
    "n queens / count total n queens",
    "find number of ways to reach from(0,0) to (n-1,m-1) in  a n x m grid. all moves ->right and down",
    "complete a sudoku",
    "rat a maze(right,left,up,down)",
    "keypad combination -> 23- >ad,ae,af,bd,be,......",
    "knight tour",
    "multi dimantional arrayList",
    "container with most water-> 1,8,6,2,5,4,8,3,7->49",
    "pair sum[list: 1,2,3,4,5,6 target: 5 -> (1,4) (2,3)]",
    "pair sum(sorted and roteted array) list:3,4,5,1,2  target:5",
    "lonely number(10,5,6,8) ans:10,8",
    "Beautifull arrayList[ 5  ans:->1,5,3,2,4]"

    
]
// let link=["https://www.geeksforgeeks.org/problems/binary-search-1587115620/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article","https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/"]


let btn = document.querySelector("button");
let main = document.querySelector(".main");
let count =0;

btn.addEventListener("click",()=>{
    let ranIdx = Math.floor(Math.random()*59);
    if(count<=2){
        let str = ques[ranIdx];
        let span = document.createElement("h3");
        span.innerText = `Question ${count} :  ${str}` ;
        span.style.color = "green";
        main.append(span);
    }
    count++;
})

console.log(ques.length);