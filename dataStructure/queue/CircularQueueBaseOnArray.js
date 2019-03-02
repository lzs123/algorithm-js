/**
 * 基于数组的两种实现循环队列的方法
 * 循环队列实现注意点：确定好队空和队满的判定条件
 */

/**
 * 方法1思路：定义一个记录队列大小的值size，当这个值与队列规定大小相等时，表示队列已满，当tail达到最底时，size不等于数组大小时，tail就指向数组第一个位置。当出队时，size—，入队时size++
 */
class circularQueue1{
    constructor(n){
        this.queueSize = n
        this.currentSize = 0
        this.head = 0
        this.tail = 0
        this.items = []
    }

    // 入队
    enqueue(item){
        // 当前队列长度是否超出限制
        if(this.currentSize >= this.queueSize){
            console.log('队列已满，入队失败')
            return
        }
        if(this.tail >= this.queueSize){
            this.tail = 0
        }
        this.items[this.tail] = item
        this.tail ++
        this.currentSize ++
    }

    //  出队
    dequeue(){
        if(this.currentSize == 0){
            console.log('当前队列为空，出队失败')
            return
        }
        const result = this.items[this.head]
        // 当前head指针是否指向最后一个元素, 若是，则head指针指回0位置
        if(this.head >= this.queueSize - 1){
            this.head = 0
        }else{
            this.head ++
        }
        this.currentSize --
        return result
    }
}



/**
 * 方法2思路：head指针指向队列当前第一个元素，tail指针指向队列当前最后一个元素的下一个位置，当队列已满时，会出现(tail+1)%n=head，n为队列大小
 */

class circularQueue2{
    constructor(n){
        this.queueSize = n + 1      // tail占据一个位置
        this.head = 0
        this.tail = 0
        this.items = []
    }

    // 入队
    enqueue(item){
        // 判断当前队列是否已满
        if((this.tail + 1)%this.queueSize == this.head){
            console.log('队列已满，入队失败')
            return
        }
        this.items[this.tail] = item
        this.tail = (this.tail + 1)%this.queueSize
    }

    // 出队
    dequeue(){
        //  检查当前队列是否为空
        if(this.head === this.tail){
            console.log('当前队列为空，出队失败')
            return
        }
        const result = this.items[this.head]
        this.head = (this.head + 1)%this.queueSize
        return result
    }
}

module.exports = {circularQueue1,circularQueue2}
// test
function test(){
    let circularQueue1Ins = new circularQueue1(5)
    console.log('--------enqueue---------')
    circularQueue1Ins.enqueue(1)
    circularQueue1Ins.enqueue(2)
    circularQueue1Ins.enqueue(3)
    circularQueue1Ins.enqueue(4)
    circularQueue1Ins.enqueue(5)
    circularQueue1Ins.enqueue(6)
    console.log('-------dequeue----------')
    console.log(circularQueue1Ins.dequeue())
    console.log(circularQueue1Ins.dequeue())
    console.log(circularQueue1Ins.dequeue())
    console.log(circularQueue1Ins.dequeue())
    console.log(circularQueue1Ins.dequeue())
    console.log(circularQueue1Ins.dequeue())


    let circularQueue2Ins = new circularQueue2(4)
    console.log('--------enqueue---------')
    circularQueue2Ins.enqueue(5)
    circularQueue2Ins.enqueue(4)
    circularQueue2Ins.enqueue(3)
    circularQueue2Ins.enqueue(2)
    circularQueue2Ins.enqueue(1)
    console.log('-------dequeue----------')
    console.log(circularQueue2Ins.dequeue())
    console.log(circularQueue2Ins.dequeue())
    console.log(circularQueue2Ins.dequeue())
    console.log(circularQueue2Ins.dequeue())
    console.log(circularQueue2Ins.dequeue())
}
