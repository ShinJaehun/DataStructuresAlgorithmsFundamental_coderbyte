class Node {
 constructor(val){
    this.val = val
    this.next = null
 }   
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(val){
        if (this.head === null) {
            this.head = new Node(val)
            return
        }

        let curr = this.head

        while (curr.next !== null){
            curr = curr.next
        }
        // curr.next = null
        curr.next = new Node(val)
    }

    print() {
        let str = ''
        let curr = this.head
        while (curr !== null) { // not curr.next !== null
            str += curr.val + ' -> '
            curr = curr.next
        }
        console.log(str)
    }

    contains(target) {
        let curr = this.head
        while (curr !== null) {
            if (curr.val === target) {
                return true
            }
            curr = curr.next
        }
        return false
    }
}

const list = new LinkedList()
list.append('a')
list.append('b')
// a -> b 

list.append('c')
// a -> b -> c

// console.log(list.head)
// Node {
//     val: 'a',
//     next: Node { val: 'b', next: Node { val: 'c', next: null } }
//   }
list.append('d')

list.print() // a -> b -> c -> d ->

console.log(list.contains('a')) // true
console.log(list.contains('z')) // false