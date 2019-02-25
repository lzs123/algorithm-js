/** 
 * javascript实现计数排序和基数排序
*/

/** 
 * 计数排序
 * 实现步骤：
 *  1、获取数组中的最大数n，创建一个临时数组，下标最大为n
 *  2、遍历原数组，将元素在临时数组中对应下标的元素加1
 *  3、将临时数组顺序求和
 *  4、对原数组进行倒序循环，将元素排好序并存放在另一临时数组中
 * 时间复杂度：O(n)
 * 适用场景：
 *  适用于数组数据范围不大。如果数据范围k比待排序数组的元素个数n大很多，就不适合使用了，因为这时候临时数组占用空间会很大
 *  计数排序只能给非负整数排序。
*/
function countingSort(arr){
    let maxNum = Math.max(...arr)
    let arrLength = arr.length
    let tmpArr1 = new Array(maxNum+1)
    // 初始化临时数组
    for(let i=0;i<=maxNum;i++){
        tmpArr1[i] = 0  
    }
    arr.forEach(item => {
        tmpArr1[item] ++
    });
    for(let k = 1;k<=maxNum; k++){
        tmpArr1[k] = tmpArr1[k]+tmpArr1[k-1]
        
    }
    let tmpArr2 = new Array(arrLength)
    // 倒序循环是为了算法的稳定性
    for(let j = arrLength-1;j>=0;j--){
        // arr[j]在tmpArr2中的下标
        let tmp2Index = tmpArr1[arr[j]]
        tmpArr2[tmp2Index - 1] = arr[j]
        tmpArr1[arr[j]] --
    }
    // 将tmpArr2结果拷贝给arr
    tmpArr2.forEach((item,index) =>{
        
        arr[index] = item
    })
    return arr
}

// test
console.log('------------countingSort----------------')
let testArr1 = [1,2,2,3,4,3,2,4,5,3,4,5,6,7,3,2]
console.log('before: ', testArr1);
console.log('after:',countingSort(testArr1))


/**
 * 基数排序：将整数按位数切割成不同的数字，然后按每个位数分别比较。将所有待比较数值统一为同样的数位长度，数位较短的数前面补零。
 * 然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。每次的位数排序时可使用计数排序
 * 时间复杂度：O(n)
 * 
 */
function radixSort(arr){
    let arrLength = arr.length
    let maxNum = Math.max(...arr)
    for(let i = 1;Math.floor(maxNum/i) > 0;i = i* 10){
        countingSortC(arr,arrLength,i)
    }
}
/**
 * @arr:待排序数组
 * @n:带排序数组长度
 * @exp:指数。对数组a按照该指数进行排序。   
 */
function countingSortC(arr,n,exp){
    let tmpArr1 = new Array(10)
    for(let i = 0;i<10;i++){
        tmpArr1[i] = 0
    }
    arr.forEach(item => {
        let index = (Math.floor(item/exp))%10   // 获取元素指定位数的大小
        tmpArr1[index] ++
    })
    // 将tmpArr1 顺序相加
    for(let k = 1;k<10;k++){
        tmpArr1[k] = tmpArr1[k-1] + tmpArr1[k]
        
    } 
    let tmpArr2 = new Array(n)
    for(let j = n-1;j>=0;j--){
        let tmp1Index = (Math.floor(arr[j]/exp))%10
        let tmp2Index = tmpArr1[tmp1Index]
        tmpArr2[tmp2Index-1] = arr[j]
        tmpArr1[tmp1Index] --
    }
    tmpArr2.forEach((item,index)=>{
        arr[index] = item
    })
}

// test
console.log('------------radixSort-------------')
let testArr2 = [32137,1,2343,21345,443,67723,3432]
console.log('before: ', testArr2);
radixSort(testArr2)
console.log('after: ', testArr2);

