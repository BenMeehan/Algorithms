function partition(arr,start,end){
    var pivotIndex=0;
    for(var i=1;i<=end;i++){
        if(arr[i]<arr[0]){
            pivotIndex++;
            var t=arr[i];
            arr[i]=arr[pivotIndex];
            arr[pivotIndex]=t;
        }
    }
    var t=arr[0];
    arr[0]=arr[pivotIndex];
    arr[pivotIndex]=t;
    
    return pivotIndex;
}

function quickSort(arr,left,right){
    if(left<right){
        var pivot=partition(arr,left,right);
        quickSort(arr,left,pivot-1);
        quickSort(arr,pivot+1,right);
    }
    return arr;
}

var arr=[24,1,6,40,9]

print(quickSort(arr,0,arr.length-1));