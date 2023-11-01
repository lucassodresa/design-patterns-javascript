class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach(function (v, k) {
      v(sender, args);
    });
  }
}

class Mediator {
  constructor() {
    this.alert = new Event();
  }

  broadcast(sender, n) {
    this.alert.fire(sender, n);
  }
}

class Participant {
  constructor(mediator) {
    this.mediator = mediator;
    this.value = 0;
    mediator.alert.subscribe(this.alert.bind(this));
  }

  alert(sender, n) {
    if (sender !== this) this.value += n;
  }

  say(n) {
    this.mediator.broadcast(this, n);
  }
}
