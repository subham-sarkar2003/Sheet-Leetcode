 
const compare = (n1:number,n2:number) => {

    let s1 = n1.toString()
    let s2 = n2.toString()

    let num1 = s1+s2
    let num2 = s2+s1

    for ( let i=0 ;i< num1.length ; i++){
        if(num1[i]>num2[i]) return -1
        if(num1[i]<num2[i]) return 1
    }

    return 0


}



 var longestNumber = function(nums:number[]){

    nums.sort(compare)
    if(nums[0] === 0) return "0"

    let  result =""
    for (let num of nums){

        result += num
    }

    return result 
 }

let nums:number[] = [3,4,1,0,9,8]
console.log(longestNumber(nums))