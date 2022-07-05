class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    return this.array.at(this.array.length - 1)
  }

  push(value) {
    this.array.push(value)

    return this
  }

  pop() {
    this.array.pop()

    return this
  }

  print() {
    console.log(JSON.stringify(this, null, 2), '\n')
  }
}

const myStack = new Stack()

myStack
  .push('marco')
  .push('tulio')
  .push('terra')

myStack.pop()
myStack.pop()

myStack.print()
