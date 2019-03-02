const {BinaryTree,BinTreeNode} = require('./binaryTree.js')
const Stack = require('../stack/stack')
const {circularQueue1:Queue} = require('../queue/CircularQueueBaseOnArray')

/**
 * 问题：求一颗树的镜像
 */
var mirror = function(node){
    if(node == null){
        return null
    }
    node.leftChild = mirror(node.leftChild)
    node.rightChild = mirror(node.rightChild)
    // 将节点的左右节点互换
    let leftChild = node.leftChild
    let rightChild = node.rightChild
    node.rightChild = leftChild
    node.leftChild = rightChild
    return node
    
}

let bt = new BinaryTree()
bt.init('A(B(D,E(G,)),C(,F))#')
// mirror(bt.root)
// bt.in_order(bt.root)


/**
 * 问题： 使用非递归方法实现前序排序
 * 思路： 处理左子树的同时，将右子树入栈
 */
var pre_order = function(node){
    let currNode = node
    let stack = new Stack()
    while(currNode){
        console.log(currNode.data)
        if(currNode.rightChild){
            stack.push(currNode.rightChild)
        }
        currNode = currNode.leftChild
        // 如果左子树为null,执行pop栈顶节点或退出循环
        if(currNode == null){
            if(stack.isEmpty()){
                // 栈为空，直接退出
                break;
            }else{
                // 栈不为空，将node设置为栈顶节点
                currNode = stack.pop()
            }
        }
    }
}
console.log('------------pre_order--------------')
pre_order(bt.root)

/**
 * 问题： 使用非递归方法实现后序排序
 */
var post_order = function(node){
    let currNode = node
    let stack = new Stack()
    while(currNode){
        if(!(currNode instanceof BinTreeNode)){
            console.log(currNode)
            if(stack.isEmpty()){
                break;
            }else{
                currNode = stack.pop()
            }
        }else{
            // 将当前结点的值入栈
            stack.push(currNode.data)
            // 先将右子树压栈
            if(currNode.rightChild){
                stack.push(currNode.rightChild)
            }
            currNode = currNode.leftChild
            // 如果左子树为null,执行pop栈顶节点或退出循环
            if(currNode == null){
                if(stack.isEmpty()){
                    break;
                }else{
                    currNode = stack.pop()
                }
            }
        }
    }
}

console.log('---------post_order-------------')
post_order(bt.root)

/**
 * 问题： 使用非递归方法实现中序排序
 */

var in_order = function(node){
    let currNode = node
    let stack = new Stack()
    while(currNode){
        if(!(currNode instanceof BinTreeNode)){
            console.log(currNode)
            if(stack.isEmpty()){
                break;
            }else{
                currNode = stack.pop()
            }
        }else{
            // console.log('currNode: ', currNode);
            // 先将右子树压栈
            if(currNode.rightChild){
                stack.push(currNode.rightChild)
            }
            // 将当前结点的值入栈
            stack.push(currNode.data)
            currNode = currNode.leftChild
            // 如果左子树为null,执行pop栈顶节点或退出循环
            if(currNode == null){
                if(stack.isEmpty()){
                    break;
                }else{
                    currNode = stack.pop()
                }
            }
        }
        
    }
}
console.log('------------in_order--------------')
in_order(bt.root)

/** 
 分层打印二叉树 
*/

var printNodeByLevel = function(node){
    let queue = new Queue()
    const flag = '#'
    // 将根结点入队列
    queue.enqueue(flag)
    queue.enqueue(node)
    while(queue.currentSize != 0){
        let currNode = queue.dequeue()

        if(currNode == flag){
            console.log('-----') // 换行
            if(queue.currentSize != 0){
                queue.enqueue(flag)   
            }
        }else{
            process.stdout.write(currNode.data);
            // 先将左结点入队，后将右结点入队
            if(currNode.leftChild){
                queue.enqueue(currNode.leftChild)
            }
            if(currNode.rightChild){
                queue.enqueue(currNode.rightChild)
            }
            
        }
    }
}

console.log('---------printNodeByLevel------------')
printNodeByLevel(bt.root)

