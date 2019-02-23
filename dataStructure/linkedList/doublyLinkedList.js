/**
 *  实现双向链表的插入、删除、查找操作
 * */

class Node{
    constructor(element){
        this.element = element
        this.next = null
        this.pre = null
    }
}

class doublyLinkedList{
    constructor(){
        this.head = new Node('head')
    }

    // 根据value查找节点
    findByValue (element) {
        let preNode = this.head.pre
        let nextNode = this.head.next
        // 查找head结点
        if(element == 'head'){
            return this.head
        }
        // 往前查找
        while(preNode){
            if(preNode.element == element){
                return preNode
            }
            preNode = preNode.pre
        }
        // 往后查找
        while(nextNode){
            if(nextNode.element == element){
                return nextNode
            }
            nextNode = nextNode.next
        }
        return -1
    }

    // 在element所在结点后面添加新结点
    insert(newElement,element){
        // 查找element的结点
        let elementNode = this.findByValue(element)
        if(elementNode == -1){
            console.log(`未找到${element}的结点`)
            return
        }
        let newNode = new Node(newElement)
        if(elementNode.next != null){
            // elementNode不是最后结点的时候需要处理newNode与后面结点的关系
            newNode.pre = elementNode   // 新结点的pre指向elementNode
            newNode.next = elementNode.next // 新节点的next指向elementNode当前的next结点
            elementNode.next = newNode  // elementNode的next指向newNode
            newNode.next.pre = newNode  // newNode的next结点的pre指向newNode
        }else{
            newNode.pre = elementNode   // 新结点的pre指向elementNode
            elementNode.next = newNode  // elementNode的next指向newNode
        }
    }

    // 在链表尾部添加新元素
    append(element){
        let currentNode = this.head
        while(currentNode.next){
            currentNode = currentNode.next
        }
        let newNode = new Node(element)
        newNode.pre = elementNode   // 新结点的pre指向elementNode
        elementNode.next = newNode  // elementNode的next指向newNode
    }

    // 根据值删除
    remove(element){
        let elementNode = this.findByValue(element)
        if(elementNode == -1){
            console.log(`未找到${element}的结点`)
            return
        }
        let preNode = elementNode.pre
        let nextNode = elementNode.next
        if(preNode == null){
            // 删除第一个元素
            nextNode.pre = null
        }else if(nextNode == null){
            // 删除最后一个元素
            preNode.next = null
        }else{
            preNode.next = nextNode
            nextNode.pre = preNode
        }
    }
    display(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

// test
let LList = new doublyLinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
LList.display()
console.log('---------')