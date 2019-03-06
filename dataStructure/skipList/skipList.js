/**
 * javascript实现跳表
 * 跳表：带有多级索引的有序链表，可减少查询的时间复杂度，原始链表查找元素的时间复杂度为O(n),使用跳表查找的时间复杂度为O(logn)
 */

class Node {
    constructor(data=null){
        // 结点的数据
        this.data = data
        // refer是存放多个指针的数组,refer[l]表示结点在l层索引指向的下一个结点
        this.refer = []
    }
}

/** 
 * 索引：min=0，0层索引表示原始链表
 * 代码参考及详细解释：https://github.com/dreamapplehappy/blog/tree/master/2018/12/02
*/
class SkipList {
    constructor(maxLevel){
        // 表示跳表允许的索引最大层数
        this.maxLevel = maxLevel
        // 表示跳表的索引层数
        this.levelCount = 1
        // 表示跳表的头结点
        this.head = new Node()
    }

    // 生成随机层数
    genRandomLevel(){
        let level = 1;
        for(let i = 1; i < this.maxLevel; i++) {
            if(Math.random() < 0.5) {
                level++;
            }
        }
        return level;
    }

    // 查找跳表的指定结点
    find(val){
        if(!val && val != 0) return null
        let p = this.head
        // 从最顶层索引开始查找,for结束后p为0层上指定结点的前一个结点
        for(let i = this.levelCount - 1;i>=0;i--){
            while(p.refer[i] !== undefined && p.refer[i].data < val){
                p = p.refer[i]
            }
        }

        if(p.refer[0] !== undefined && p.refer[0].data){
            return p.refer[0]
        }
        return null
    }

    // 插入跳表
    insert(val){
        if(!val && val != 0) return null
        let newNode = new Node(val)
        let nodeLevel = this.genRandomLevel()
        let p = this.head
        // update保存的是nodeLevel-1层及以下各层上需要更新的结点，update[2]表示的是第二层索引上指定结点的上一个结点
        let update = []
        for(let i = nodeLevel - 1;i>=0;i--){
            while(p.refer[i]!== undefined && p.refer[i].data < val){
                p = p.refer[i]
            }
            update[i] = p
        }

        // 修改update中的结点，并将newNode加入跳表中
        for(let k = 0;k< nodeLevel; k++){
            newNode.refer[k] = update[k].refer[k]
            update[k].refer[k] = newNode
        }

        // 更新跳表索引层数
        if(this.levelCount < nodeLevel){
            this.levelCount = nodeLevel
        }
    }

    // 删除指定结点
    remove(val){
        if(!val && val != 0) return null
        let p = this.head
        // update保存的是各层中指定结点的上一个结点的集合，update[2]表示的是第二层索引上指定结点的上一个结点
        let update = []
        for(let i = this.levelCount - 1;i>=0;i--){
            while(p.refer[i]!== undefined && p.refer[i].data < val){
                p = p.refer[i]
            }
            update[i] = p
        }

        // 跳表存在指定结点
        if(p.refer[0] !== undefined && p.refer[0] == val){
            // 循环所有索引层，如果在l层上，指定结点在l层上的前一个结点update[l]的下一个结点update[l].refer[l]的值为val，则表示需要对update[l]进行更新
            for(let k = 0;k < this.levelCount; k++){
                if(update[k].refer[k] !== undefined && update[k].refer[k].data == val){
                    update[k].refer[k] = update[k].refer[k].refer[k]
                }
            }
        }
    }

    // 打印跳表所有结点
    display(){
        let p = this.head
        while(p.refer[0] !== undefined){
            console.log(p.refer[0].data)
            p = p.refer[0]
        }
    }
}