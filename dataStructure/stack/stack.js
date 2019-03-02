function Stack(){
    this.items = []

    // push方法向栈里压入一个元素
    this.push = function(item){
        this.items.push(item)
    }

    // top方法返回栈顶元素
    this.top = function(){
        return this.items[this.items.length - 1]
    }

    // pop方法推出栈顶元素
    this.pop = function(){
        return this.items.pop()
    }

    // isEmpty返回栈是否为空
    this.isEmpty = function(){
        return this.items.length == 0
    }
    
    // size方法返回栈的大小
    this.size = function(){
        return this.items.length
    }

    // clear清空栈
    this.clear = function(){
        this.items = []
    }
}


module.exports = Stack