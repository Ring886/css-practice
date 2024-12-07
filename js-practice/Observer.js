class Observer {
  constructor() {
    this.events = {}; // 用于存储事件及其回调函数
  }

  // 注册监听事件
  $on(eventName, handler) {   // 同一个事件可以绑定多个回调函数
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  // 广播事件，触发所有监听回调
  $emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((handler) => {
        handler(...args);
      });
    }
  }

  // 取消监听事件
  $off(eventName, handler) {
    if (!eventName) {
      // 如果没有指定事件名，清空所有事件
      this.events = {};
      return;
    }

    if (!handler) {
      // 如果没有指定 handler，清空该事件的所有监听器
      delete this.events[eventName];
      return;
    }

    // 如果指定了 handler，移除特定的回调
    this.events[eventName] = this.events[eventName].filter((h) => h !== handler);
  }
}

const observer = new Observer();

// 定义事件处理函数
const handler1 = (msg) => console.log(`Handler 1: ${msg}`);
const handler2 = (msg) => console.log(`Handler 2: ${msg}`);

// 注册事件监听
observer.$on('message', handler1);
observer.$on('message', handler2);

// 广播事件
observer.$emit('message', 'Hello World!');
// 输出:
// Handler 1: Hello World!
// Handler 2: Hello World!

// 移除指定的 handler
observer.$off('message', handler1);
observer.$emit('message', 'Hello again!');
// 输出:
// Handler 2: Hello again!

// 移除该事件所有监听器
observer.$off('message');
observer.$emit('message', 'No listeners should respond.');
// 无输出

// 注册多个事件
observer.$on('event1', () => console.log('Event 1 triggered'));
observer.$on('event2', () => console.log('Event 2 triggered'));

// 广播多个事件
observer.$emit('event1'); // 输出: Event 1 triggered
observer.$emit('event2'); // 输出: Event 2 triggered

// 清空所有事件
observer.$off();
observer.$emit('event1'); // 无输出
observer.$emit('event2'); // 无输出
