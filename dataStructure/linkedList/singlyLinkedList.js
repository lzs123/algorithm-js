/**
 * 单链表的插入、删除、查找操作
 *  */
class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

/**
 * singlyLinkedList index为0的结点为head结点
 *  */
class singlyLinkedList {
    constructor(){
        this.head = new Node('head')
    }

    // 根据value查找节点
    findByValue (item) {
        let currentNode = this.head
        while(currentNode.next !== null && currentNode.element !== item){
            currentNode = currentNode.next
        }
        if(currentNode.element !== item){
            return -1
        }
        return currentNode
    }

    // 根据index查找节点
    findByIndex (index) {
        let currentNode = this.head
        while(index && currentNode.next !== null){
            currentNode = currentNode.next
            index--
        }
        return index === 0?currentNode:-1
    }

    // 指定元素向后插入
    insert (newElement, element) {
        let elementNode = this.findByValue(element)
        if(elementNode == -1){
            console.log('未找到插入位置')
        }
        let newElementNode = new Node(newElement)
        newElementNode.next = elementNode.next
        elementNode.next = newElementNode
    }

    // 查找前一个
    findPrev (element) {
        let currentNode = this.head
        while(currentNode.next.next != null && currentNode.next.element !== element){
            currentNode = currentNode.next
        }
        return currentNode.next.element === element?currentNode:-1
    }

    // 根据值删除
    remove (element) {
        let elementNode = this.findByValue(element)
        if(elementNode === -1){
            console.log('未找到元素')
            return
        }
        let prevNode = this.findPrev(element)
        prevNode.next = elementNode.next
    }

    // 在链表尾部追加元素
    append(element){
        let currentNode = this.head
        while(currentNode.next != null){
            currentNode = currentNode.next
        }
        let newNode = new Node(element)
        currentNode.next = newNode
    }
    // 遍历显示所有节点
    display () {
        let currentNode = this.head
        while(currentNode !== null){
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

module.exports = {
    singlyLinkedList,
    Node
}
// test
function test(){
    let LList = new singlyLinkedList()
    LList.insert('chen', 'head')
    LList.insert('curry', 'chen')
    LList.insert('sang', 'head')
    LList.insert('zhao', 'head')
    console.log('-------------display all item-------')
    LList.display()
    console.log('-------------remove item------------')
    LList.remove('curry')
    LList.display()
    console.log('-------------find by item------------')
    console.log(LList.findByValue('chen').element)
    console.log('-------------find by index------------')
    console.log(LList.findByIndex(2).element)
}

// test()
