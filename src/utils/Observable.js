/**
 * @observers 一组观察者，每当发生特定事件时都会收到通知
 * @subscribe 将观察者添加到观察者列表的方法
 * @unsubscribe 一种从观察者列表中删除观察者的方法
 * @notify 一种在发生特定事件时通知所有观察者的方法
 */

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));  
    }
}

export default new Observable();


