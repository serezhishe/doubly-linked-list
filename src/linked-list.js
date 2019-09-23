const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (this.isEmpty()) {
            this._head = new Node(data);
            this._tail = this._head;
        }
        else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head) return this._head.data;
        else return null;
    }

    tail() {
        if (this._tail) return this._tail.data;
        else return null;
    }

    at(index) {
        let curr = this._head;  
        for (let i = 0; i < index; i++) 
            curr = curr.next;
        return curr.data;
    }

    insertAt(index, data) {
        let curr = this._head;  
        for (let i = 0; i < index; i++) 
            curr = curr.next;
        let tmp = new Node(data, null, curr);
        if (curr) {
            tmp.prev = curr.prev
            curr.prev = tmp;
            tmp.prev.next = tmp;
        } else curr = tmp;
        this.length++;
        return this;
    }

    isEmpty() {
        if (!this.length) return true;
        else return false; 
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let curr = this._head;  
        for (let i = 0; i < index; i++) 
            curr = curr.next;
        if (curr.prev) curr.prev.next = curr.next;
        if (curr.next) curr.next.prev = curr.prev;
        curr = null;
        return this;
        }

    reverse() {
        if (this.length == 1) return this
        let curr = this._head.next;
        this._tail = this._head;
        this._tail.prev =  curr;
        while (curr.prev) {
            let tmp = curr.prev;
            curr.prev = curr.next;
            curr.next = tmp;
            if (curr.prev) curr = curr.prev;
        }
        this._head = curr;
        this._head.prev = null;
        this._tail.next = null;
        return this;
    }

    indexOf(data) {
        let curr = this._head;
        for (let i = 0; i < this.length; i++) {
            if (curr.data === data) return i;
            curr = curr.next;
        }
    return -1;
    }
}

module.exports = LinkedList;
