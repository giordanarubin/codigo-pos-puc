class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
}  

var myStack = new Stack()

myStack.push(5);
console.log(myStack.peek())
console.log("---------------------------")

myStack.push(8);
console.log(myStack.size())
console.log(myStack.isEmpty())
console.log("---------------------------")

myStack.push(6);
console.log(myStack)
console.log("---------------------------")

myStack.pop()
console.log(myStack)
