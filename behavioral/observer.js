// MessageBus
// PubSub

// Publisher -> Notify  ::  Subscriber -> Listen
// Stock -> Push :: Subscribe NewsLetter -> receive email
// Disconnected System, Event Driven Architecture

function PubSub() {
    this.pool = {};
}

PubSub.prototype.subscribe = function (eventName, handler) {
    if (this.pool[eventName]) {
        this.pool[eventName].push(handler);
    }
    else {
        this.pool[eventName] = [handler]
    }
}

PubSub.prototype.trigger = function (eventName, data) {
    let handels = this.pool[eventName];
    console.log(handels);
    for (var i = 0; i < handels.length; i++) {
        handels[i](data);
    }
}

// PubSub, App Sheel
var pubSub= new PubSub();

pubSub.subscribe('addToBag', function (args) {
    console.log('Item Added - ', args);
});

pubSub.subscribe('addToBag', function (args) {
    console.log('Item is dispached - ', args);
});

pubSub.trigger('addToBag', { pid: 5454545, qty: 1, price: 12 });