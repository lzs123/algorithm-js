/**
 * 实现bitMap的addMember方法和isExist方法
 */
class bitMap{
    constructor(arrLength){
        this.arrLength = arrLength
        this.arr = new Array(arrLength)
        // 初始化数组
        for(let i=0;i<arrLength;i++){
            this.arr[i] = 0
        }
    }

    addMember(n){
        // 判断是存储在数组的第几个元素中
        let arr_index = Math.floor(n/32)
        // 确定存储在数组元素的二进制位置
        let bit_offset = n%32
        this.arr[arr_index] = this.arr[arr_index] | 1<<bit_offset
    }
    
    isExist(n){
        if(Math.ceil(n/32) > this.arrLength){
            return false
        }
        let arr_index = Math.floor(n/32)
        let bit_offset = n%32
        return (this.arr[arr_index] & 1 << bit_offset) == 0?false:true
    }
}

// test
// 根据待测数组计算得出arrLength，并调用实例化bitMap类
let testArr = [1,2,3,4,87,91]
let arrCount = Math.ceil(91/32)
let bitMapIns = new bitMap(arrCount)
testArr.forEach(function(value,index){
    bitMapIns.addMember(value)
})

console.log(bitMapIns.isExist(98))
console.log(bitMapIns.isExist(3))