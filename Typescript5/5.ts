
// third maximum number 
 var thirdMax =  function(nums:number[]){

    let max1:number = Number.NEGATIVE_INFINITY
    let max2:number = Number.NEGATIVE_INFINITY
    let max3:number = Number.NEGATIVE_INFINITY

    for (let num of nums){

        if(num > max1){

            max3=max2
            max2=max1
            max1=num
        }
        else if(num<max1 && num>max2){

            max3=max2
            max2=num
        } else if(num< max2 && num > max3){

            max3=num
        }
    }

     return max3 !== Number.NEGATIVE_INFINITY ? max3 : max1

 }

let a:number[]=[3,2,4,5,1,0,6]
console.log(thirdMax(a))