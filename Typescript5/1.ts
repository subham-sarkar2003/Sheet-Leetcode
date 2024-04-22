 
  var lengthOfLongestSubstring = function(s:string){

    let max = 0
    let charmap = new Map()
    let start = 0

     for (let end = 0 ;  end < s.length ; end ++){

        let char  = s[end]
        if(charmap.has(char)){

            start =  Math.max(start,charmap.get(char)+1)

        }

        charmap.set(char,end)
        max = Math.max(max,end-start+1)
     }

     return max
  }

let s:string ="abcaabbcc"
console.log(lengthOfLongestSubstring(s))