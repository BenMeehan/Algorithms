function selection_sort(arr){
    
    for(i=0;i<arr.length;i++){
        min=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        
        if(i===min){
            continue;
        }
        else{
            var t=arr[i]
            arr[i]=arr[min]
            arr[min]=t
        }
    }
    
    return arr;
}
print(selection_sort([1,42,9,5,56,8]))