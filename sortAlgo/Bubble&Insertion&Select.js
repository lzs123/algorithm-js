/**
 * javascript实现冒泡排序、插入排序、选择排序
 */

 /**
  * 冒泡排序: 从左到右，依次比较相邻两元素大小是否满足条件，若不满足，调换位置
  * 时间复杂度：O(n^2)
  * 结果：顺序
  */

function bubbleSort(list){
    let listLength = list.length
    for(let k = 1;k < listLength;k++){
        for(let i = 0;i<listLength - k; i++){
            if(list[i] > list[i+1]){
                [list[i],list[i+1]] = [list[i+1],list[i]]   //  两数交换，es6写法
            }
        }
    }
    return list
}

// test
console.log('---------bubbleSort----------')
console.log(bubbleSort([3,4,2,1,4,6,8,1,2,3,42,2,1,3,4]))

/**
 * 插入排序：将待排序数组分成两个区域，已排序区域和未排序区域，每次从未排序区域取出一个数插入已排序区域中正确的位置
 * 时间复杂度：O(n^2)
 * 结果：顺序
 */
function insertionSort(list){
    let listLength = list.length
    for(let k = 1; k<listLength; k++){
        let tmp = list[k]
        for(let i = k-1;i >= 0;i--){
            if(list[i] > tmp){
                list[i+1] = list[i]
            }else{
                list[i+1] = tmp
                break;
            }
            if(i == 0){
                list[0] = tmp
            }
        }
    }
    return list
}


// test
console.log('---------insertionSort----------')
console.log(insertionSort([3,4,2,1,4,6,8,1,2,3,42,2,1,3,4]))

/**
 * 选择排序：将待排序数组分成两个区域，已排序区域和未排序区域，每次获取当前未排序区域最小（或最大）的数，添加到已排序区域的尾部
 * 时间复杂度：O(n^2)
 * 结果：顺序
 */
function selectionSort(list){
    let listLength = list.length
    for(let k = 0;k<listLength-1;k++){
        for(let i=k+1;i < listLength;i++){
            if(list[i] < list[k]){
                [list[i],list[k]] = [list[k],list[i]]
            }
        }
    }
    return list
}
// test
console.log('---------selectionSort----------')
console.log(selectionSort([3,4,2,1,4,6,8,1,2,3,42,2,1,3,4]))

/**
 * 三种排序算法比较：
 * 1、计算时都不需要额外的存储空间，所以都属于原地排序算法
 * 2、三种排序的时间复杂度均为O(n^2)
 * 3、在排序算法中，对于值相同的元素，排序后原有的前后顺序保持不变，称该排序算法为稳定的排序算法。冒泡排序和插入排序为稳定的排序算法，选择排序为不稳定的排序算法（每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，破坏了稳定性）
 */
