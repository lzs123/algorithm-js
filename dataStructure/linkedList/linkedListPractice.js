const { singlyLinkedList } = require('./singlyLinkedList')

/**
 * 问题：已知有两个有序链表（链表元素从小到大），请实现merge_link,将两个链表合并成一个有序链表，并返回新链表，原有两个链表不要修改
 */
function merge_link(link1,link2){
    let cursor1 = link1.head.next
    let cursor2 = link2.head.next
    let result = new singlyLinkedList()
    while(cursor1 && cursor2){
        
        // 将数值小的游标添加到result链表中，并移动该游标
        if(cursor1.element < cursor2.element){
            result.append(cursor1.element)
            cursor1 = cursor1.next
        }else{
            result.append(cursor2.element)
            cursor2 = cursor2.next
        }
    }
    //  将剩余没走完的游标继续走完
    if(cursor1){
        while(cursor1){
            result.append(cursor1.element)
            cursor1 = cursor1.next
        }
    }else if(cursor2){
        while(cursor2){
            result.append(cursor2.element)
            cursor2 = cursor2.next
        }
    }
    return result
    
}

// test
console.log('----------merge_link-----------')
let link1 = new singlyLinkedList()
link1.append(2)
link1.append(4)
link1.append(5)
link1.append(12)
link1.append(18)
link1.append(20)
link1.append(25)
link1.append(45)
link1.append(53)
link1.display()
let link2 = new singlyLinkedList()
link2.append(1)
link2.append(62)
link2.append(87)
link2.append(92)
link2.append(109)
link2.display()
let mergedLink = merge_link(link1,link2)
mergedLink.display()



/**
 * 问题：从尾到头打印链表，不允许翻转链表
 * 思路：使用递归
 */
function reverse_print(node){
    if(node.next == null){
        console.log(node.element)
    }else{
        reverse_print(node.next)
        console.log(node.element)
    }
}

// test
console.log('------------reverse_print--------------')
let link3 = new singlyLinkedList()
link3.append(2)
link3.append(4)
link3.append(5)
link3.append(12)
link3.append(18)
link3.append(50)
link3.append(65)
link3.append(85)
link3.append(23)
reverse_print(link3.head)

/**
 * 问题：查找链表中倒数第k个结点
 * 思路：两个游标指针，一个先行k步，然后两个指针以相同速度一起走，直到前面的指针到达尾部为止
 */

function getReciprocalNode(link,k){
    if(k <= 0){
        console.log('k的值必须最小为1')
        return
    }
    let aheadStep = k
    let cursor1 = link.head
    let cursor2 = link.head
    // cursor2先行k步
    while(aheadStep && cursor2){
        cursor2 = cursor2.next
        aheadStep--
    }

    if(!cursor2){
        console.log(`链表无法获取倒数${k}的节点`)
        return
    }

    // cursor1和cursor2一起走，直到cursor2为走完
    while(cursor2){
        cursor1 = cursor1.next
        cursor2 = cursor2.next
    }
    return cursor1.element
}

// test
console.log('----------getReciprocalNode------------')
let link4 = new singlyLinkedList()
link4.append(2)
link4.append(4)
link4.append(5)
link4.append(12)
link4.append(18)
link4.append(50)
link4.append(65)
link4.append(85)
link4.append(23)
console.log(getReciprocalNode(link4,6))
console.log(getReciprocalNode(link4,3))

/**
 * 问题：查找链表的中间结点
 * 思路：设置两个游标指针，cursor1每次走1步，cursor2每次走2步，直到cursor2走到最后一个停止
 */
function getMiddleNode(link){
    let cursor1 = link.head
    let cursor2 = link.head
    while(cursor2.next){
        cursor1 = cursor1.next
        cursor2 = cursor2.next
        if(cursor2 && cursor2.next){
            cursor2 = cursor2.next
        }
    }
    return cursor1.element
}

// test
console.log('---------getMiddleNode----------')
let link5 = new singlyLinkedList()
link5.append(2)
link5.append(4)
link5.append(5)
link5.append(12)
link5.append(40)
console.log(getMiddleNode(link5))

