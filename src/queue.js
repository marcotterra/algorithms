class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    console.log(this.first);
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++

    return this
  }

  dequeue() {
    if (!this.first) {
      return null
    }

    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.length--

    return this
  }

  print() {
    console.log(JSON.stringify(this, null, 2), '\n')
  }
}

const myStack = new Stack()

myStack
  .enqueue('marco')
  .enqueue('tulio')
  .dequeue()
  .enqueue('terra')
  .enqueue('tralala')
  .enqueue('bobobo')
  .dequeue('')

// myStack.pop()
// myStack.pop()
// myStack.pop()

myStack.print()
