class QueueWithStack {
  constructor() {
    this.first = []
    this.last = []
  }

  enqueue(value) {
    const length = this.first.length

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    }

    this.last.push(value)

    return this
  }

  dequeue() {
    const length = this.last.length

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop())
    }

    this.first.pop()

    return this
  }

  peek() {
    if (this.last.length > 0) {
      return this.last.at(0)
    }

    return this.first.at(this.first.length - 1)
  }

  print() {
    console.log(JSON.stringify(this, null, 2), '\n')
  }
}

const myQueueStack = new QueueWithStack()

myQueueStack.peek();
myQueueStack.enqueue('Joy');
myQueueStack.enqueue('Matt');
myQueueStack.enqueue('Pavel');
myQueueStack.peek();
myQueueStack.dequeue();
// myQueueStack.dequeue();
// myQueueStack.dequeue();
// myQueueStack.peek();



myQueueStack.print()
