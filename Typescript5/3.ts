//   add binary 

 var addBinary  = function(a:string,b:string) {

    let  i= a.length -1
    let  j=b.length -1
    let carry =0
    let result = ""

    //  starting while loop

    while ( i>=0 || j>=0 || carry>0){

        let d1 =  i>=0 ? parseInt(a[i]) : 0
        let d2 =  j>=0 ? parseInt(b[j]) : 0

        const sum = d1+d2+carry

        result  = (sum%2) + result
        //  This line calculates the binary digit of the current position by taking the remainder of the sum divided by 2 (which will be either 0 or 1) and prepends it to the result string.

        carry =Math.floor(sum/2)
        //  This line calculates the carry for the next position by dividing the sum by 2 and taking the integer part.

        i--
        j--
    }

    return result

 }

let a:string="1011"
let b:string="110"
console.log(addBinary(a,b))