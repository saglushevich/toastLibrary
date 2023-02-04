/* eslint-disable no-constructor-return */
class Toast {
  constructor() {
    if (Toast.exist) {
      return Toast.instance;
    }
    Toast.instance = this;
    Toast.exist = true;
    this.toasts = [];
    this.toastsQueue = [];
    this.id = 0;
    this.subscribers = new Map();
  }

  addToast(toast) {
    if (this.toasts.length < 3) {
      this.toasts.push({ ...toast, id: this.id });
    } else {
      this.toastsQueue.push({ ...toast, id: this.id });
    }
    this.id += 1;
    this.notifyAll();
  }

  removeToast(id = 0) {
    this.toasts = this.toasts.filter((item) => item.id !== id);
    if (this.toastsQueue.length > 0) {
      this.toasts.push(this.toastsQueue.shift());
    }
    this.notifyAll();
  }

  notifyAll() {
    this.subscribers.forEach((callback) => {
      callback([...this.toasts]);
    });
  }

  subscribe(subscriber, callback) {
    if (!this.subscribers.has(subscriber)) {
      this.subscribers.set(subscriber, callback);
    }
  }

  unsubscribe(subscriber) {
    if (this.subscribers.has(subscriber)) {
      this.subscribers.delete(subscriber);
    }
  }
}

export const toast = new Toast();
