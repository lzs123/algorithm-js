/**
 * javascript实现归并排序和快速排序
 */

/**
 * 归并排序
 * 时间复杂度：归并排序的时间复杂度任何情况下都是 O(nlogn)
 * 归并排序是一种稳定的算法
 * 归并排序不是一种原地算法，空间复杂度为O(n)(分析：递归代码的空间复杂度并不能像时间复杂度那样累加。刚刚我们忘记尽管每次合并操作都需要申请额外的内存空间，但在合并完成之后，
 * 临时开辟的内存空间就被释放掉，在任意时刻，CPU 只会有一个函数在执行，也就只会有一个临时的内存空间在使用，临时内存空间最大也不会超过 n 个数据的大小）
 */

function mergeSort(arr){
    mergeSortC(arr,0,arr.length-1)
}

function mergeSortC(arr,startIndex,endIndex){
    let midIndex = Math.floor((startIndex + endIndex)/2)
    if(midIndex >= endIndex)return
    mergeSortC(arr,startIndex,midIndex)
    mergeSortC(arr,midIndex + 1,endIndex)
    // 合并阶段
    merge(arr,startIndex,midIndex,endIndex)
}
function merge(arr,startIndex,midIndex,endIndex){
    let tmp = []
    let cursor1 = startIndex
    let cursor2 = midIndex+1
    let maxCursor1 = startIndex + (midIndex-startIndex)
    let maxCursor2 = midIndex + 1 + (endIndex - midIndex - 1)
    while(cursor1 <= maxCursor1 && cursor2 <= maxCursor2){
        if(arr[cursor1] <= arr[cursor2]){
            tmp.push(arr[cursor1])
            cursor1 ++
        }else{
            tmp.push(arr[cursor2])
            cursor2 ++
        }
    }
    if(cursor1 <= maxCursor1){
        // cursor1指向的数组部分有剩余
        while(cursor1 <= maxCursor1){
            tmp.push(arr[cursor1])
            cursor1++
        }
    }
    if(cursor2 <= maxCursor2){
        // cursor2指向的数组部分有剩余
        while(cursor2 <= maxCursor2){
            tmp.push(arr[cursor2])
            cursor2 ++
        }
    }
    let i = startIndex
    while(i <= endIndex){
        arr[i] = tmp.shift()
        i++
    }
}


// test
console.log('---------mergeSort-----------')
let testArr = [1,2,34,2,1,3,4,5]
console.log(`before:${testArr}`)
mergeSort(testArr)
console.log(`after:${testArr}`)


/**
 * 快速排序
 * 不稳定（分区时相同元素位置会改变），原地算法
 * 时间复杂度：O(nlogn)
 */

 function quickSort(arr){
     quickSortC(arr,0,arr.length-1)
 }

 function quickSortC(arr,startIndex,endIndex){
    if(startIndex >= endIndex)return
    let midIndex = partition(arr,startIndex,endIndex)
    quickSortC(arr,startIndex,midIndex-1)
    quickSortC(arr,midIndex+1,endIndex)
 }

 // 分区，分区过程类似选择排序
 function partition(arr,startIndex,endIndex){
    let pivot = arr[endIndex]
    let k = startIndex
    for(let i = startIndex;i<=endIndex-1;i++){
        if(arr[i] < pivot){
            [arr[i],arr[k]] = [arr[k],arr[i]]
            k++
        }
    }
    [arr[k],arr[endIndex]] = [arr[endIndex],arr[k]]
    return k
 }

//  test
console.log('----------quickSort------------')
let testArr2 = [1,2,34,2,1,3,4,5]
console.log('before: ', testArr2);
quickSort(testArr2)
console.log('after: ', testArr2);



