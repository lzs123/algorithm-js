/**
 * 1、适用二分查找的对象是有序的数组。
 * 2、数据量太大不适合用二分查找，因为二分查找需要依赖数组，需要连续的内存空间
 *  */

/** 
 *  二分查找非递归实现
*/
function bSearch(arr,target){
    let high = arr.length - 1
    let low = 0
    while(low <= high){
        let mid = low+((high-low)>>1)
        if(arr[mid] == target){
            return mid
        }else if(arr[mid] < target){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
}

/*
* 二分查找递归实现
*/

function bSearchrRecursive(arr,target){
    let arrLen = arr.length - 1
    return bSearchRC(arr,0,arrLen,target)
}
function bSearchRC(arr,low,high,target){
    let mid = low + ((high-low)>>1)
    if(arr[mid] == target){
        return mid
    }else if(arr[mid] > target){
        high = mid - 1
    }else{
        low = mid + 1
    }
    return bSearchRC(arr,low,high,target)
}

// 二分查找变形题
/**
 * 找到第一个值等于给定值的元素
 */

function bSearchP1(arr,target){
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = low + ((high - low)>>1)
        if(arr[mid] > target){
            high = mid - 1
        }else if(arr[mid] < target){
            low = mid + 1
        }else if(mid == 0 || arr[mid - 1] !== target){
            return mid
        }else{
            high = mid - 1
        }
    }
    return -1
}
let testPArr = [2,3,3,3,3,5,5,22,31]
console.log(bSearchP1(testPArr,3))
/**
 * 找到最后一个值等于给定值的元素 
 */
function bSearchP2(arr,target){
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = low + ((high - low) >> 1)
        if(arr[mid] < target){
            low = mid + 1
        }else if(arr[mid] > target){
            high = mid - 1
        }else if(mid == arr.length - 1 || arr[mid + 1] !== target){
            return mid
        }else{
            low = mid + 1
        }
    }
    return -1
}

/** 
 * 找到第一个大于等于给定值的元素
*/

function bSearchP3(arr,target){
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = low + ((high-low)>>1)
        if(arr[mid] < target){
            low = mid + 1
        }else if(arr[mid - 1] < target){
            return mid
        }else{
            high = mid - 1
        }
    }
    return -1
}

// console.log(bSearchP3(testPArr,21))

/**
 * 查找最后一个小于等于给定值的元素 
 */
function bSearchP4(arr, target){
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = low + ((high-low)>>1)
        if(arr[mid] > target){
            high = mid - 1
        }else if(arr[mid + 1] > target){
            return mid
        }else{
            low = mid + 1
        }
    }
    return -1
}
// test
// let testArr = [2,3,4,11,22,34]
// console.log(bSearchrRecursive(testArr,22))
// console.log(bSearch(testArr,11))