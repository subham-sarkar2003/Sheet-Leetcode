//   majority element 

var majorityElement = function(nums){

    let candidate = null
    let count  = 0

    for (let num of nums){

        if( count === 0){

            candidate =  num
        }

        count += (num === candidate) ? 1:-1
    }


    count = 0

    for(let num of nums){

        if( num === candidate){

            count ++
        }
    }

    return candidate
}

let nums = [3,2,3]
console.log(majorityElement(nums))