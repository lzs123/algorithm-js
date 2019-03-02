
/** 
 * 二叉树的实现，以及中序遍历、前序遍历、后序遍历三种遍历方式 
*/

const Stack = require('../stack/stack')
var  BinTreeNode = function(data){
    this.data = data
    this.leftChild = null   // 左孩子
    this.rightChild = null  // 右孩子
    this.parentNode = null  // 父节点
}

function BinaryTree(){
    this.root = null     // 根节点
    // 初始化,使用广义表创建，即string格式为：'A(B(C,D),E(F,G(H,K)))'
    this.init = function(string){
        var stack = new Stack()
        var k = 0;   // 标识识别的是左子树还是右子树
        var new_node = null  

        for(var i = 0; i<string.length;i++){
            var item = string[i]
            if(item == '('){
                stack.push(new_node);
                k = 1
            }else if(item == ','){
                k = 2 
            }else if(item == ')'){
                stack.pop()
            }else if(item == '#'){
                break;
            }else{
                new_node = new BinTreeNode(item)  // 创建新结点
                if(this.root == null){
                    this.root = new_node
                }else{
                    var top_item = stack.top()
                    if(k == 1){
                        // 说明new_node是左孩子
                        top_item.leftChild = new_node   
                    }else{
                        // new_node是右孩子
                        top_item.rightChild = new_node
                    }
                    new_node.parentNode = top_item
                }
            }
        }
    }

    // 中序遍历:先处理左子树，后处理结点本身，最后处理右子树
    this.in_order = function(node){
        if(node == null){
            return 
        }
        this.in_order(node.leftChild)
        console.log(node.data)
        this.in_order(node.rightChild)
    }

    // 前序遍历
    this.pre_order = function(node){
        if(node == null){
            return 
        }
        console.log(node.data)
        this.pre_order(node.leftChild)
        this.pre_order(node.rightChild)
    }

    // 后序排序
    this.post_order = function(node){
        if(node == null){
            return
        }
        this.post_order(node.leftChild)
        this.post_order(node.rightChild)
        console.log(node.data)
    }

    // 计算给点结点的子节点数量
    let tree_node_count = function(node){
        if(node == null){
            return 0
        }
        return tree_node_count(node.leftChild) + tree_node_count(node.rightChild) + 1
    }
    
    //  返回树的节点数量
    this.size = function(){
        return tree_node_count(this.root)
    }

    let tree_node_height = function(node){
        if(node == null){
            return 0
        }
        return Math.max(tree_node_height(node.leftChild),tree_node_height(node.rightChild)) + 1
    }
    // 返回树的高度
    this.height = function(){
        return tree_node_height(this.root)
    }
}

module.exports = {BinaryTree,BinTreeNode}
// test
// let binaryTreeIns = new BinaryTree()
// binaryTreeIns.init('A(B(C,D),E(F,G(H,K)))')
// console.log('---------中序排序---------')
// binaryTreeIns.in_order(binaryTreeIns.root)
// console.log('--------前序排序---------')
// binaryTreeIns.pre_order(binaryTreeIns.root)
// console.log('---------后序排序---------')
// binaryTreeIns.post_order(binaryTreeIns.root)
// console.log('---------size-----------')
// console.log(binaryTreeIns.size())
// console.log('----------height------------')
// console.log(binaryTreeIns.height())




