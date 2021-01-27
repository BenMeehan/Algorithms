function merge(arr1,arr2){
    var result=[];
    
    var ptr1=0,ptr2=0;
    
    while(ptr1<arr1.length&&ptr2<arr2.length){
        if(arr1[ptr1]<arr2[ptr2]){
            result.push(arr1[ptr1]);
            ptr1++;
        }
        else if(arr2[ptr2]<arr1[ptr1]){
            result.push(arr2[ptr2]);
            ptr2++;
        }
        else{
            result.push(arr1[ptr1]);
            result.push(arr2[ptr2]);
            ptr1++;
            ptr2++;
        }
    }
    
    while(ptr1<arr1.length){
        result.push(arr1[ptr1]);
        ptr1++;
    }
    
    while(ptr2<arr2.length){
        result.push(arr2[ptr2]);
        ptr2++;
    }
    
    return result;
    
}

function mergeSort(arr){
    if(arr.length===1){
        return arr;
    }
    
    var mid=Math.floor(arr.length/2);
    var left=mergeSort(arr.slice(0,mid));
    var right=mergeSort(arr.slice(mid));
    
    return merge(left,right);
    
}

            
print(mergeSort([1,5,3,2]));

