function getDigit(num,place){
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10;
}

function digitCount(num){
    num=Math.abs(num);
    return Math.floor(Math.log(num)*Math.LOG10E)+1;
}

function mostDigits(arr){
    var max=0;
    var digits;
    for(i=0;i<arr.length;i++){
        digits=digitCount(arr[i]);
        if(digits>max){
            max=digits;
        }
    }
    return max;
}

function radixSort(arr){
    var n=mostDigits(arr);
    
    for (i=0;i<n;i++){
        var bucket=[[],[],[],[],[],[],[],[],[],[]];
        for(j=0;j<arr.length;j++){
            var digit=getDigit(arr[j],i);
            bucket[digit].push(arr[j]);
        }
        arr=[].concat(...bucket);
    }
    return arr;
}

console.log(radixSort([12,300,1,45,690]))
