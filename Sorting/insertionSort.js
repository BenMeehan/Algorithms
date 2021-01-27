function insertion_sort(arr){
    
    for(i=1;i<arr.length;i++){
        let current=arr[i]
        for(j=i-1;j>=0 && arr[j]>current ;j--){
                arr[j+1]=arr[j];
        }
        arr[j+1]=current;
    }
    
    return arr;
}

print(insertion_sort([23,1,42,9,5,56,8]));