function bubble_sort(arr){
    do {
        var sorted=false;
        var j=1;
        for(i=0;i<arr.length-j;i++){
            if(arr[i]>arr[i+1]){
                
                var t=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=t;
                
                sorted=true;
            }
        }
        j++;
    } while (sorted);
    
    return arr;
}

print(bubble_sort([23,1,42,9,5,56,8]))