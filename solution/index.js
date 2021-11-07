module.exports = class {
  constructor(values = []) {
    this.values = [];

    for (const value of values) {
      this.add(value);
    }
  }

  [Symbol.iterator]() {
      return this.values[Symbol.iterator]();
  }

  add(value) {
    if (!this.has(value)) {
      this.values.push(value);
    }

    return this;
  }

  delete(value) {
    const idx = this.values.indexOf(value);
    this.values.splice(idx, 1);
  }

  has(value) {
    return this.values.includes(value);
  }

  get size() {
    return this.values.length;
  }

  clear() {
    this.values = [];
  }

  forEach(cb, thisArg) {
    if (thisArg) {
      this.values.forEach(value => {
        cb.call(thisArg, value);
      });
    } else {
      this.values.forEach(value => {
        cb(value);
      });
    }
  }

  keys() {
    return this[Symbol.iterator]();
  }

  values() {
    return this[Symbol.iterator]();
  }

  entries() {
    return this.values.map(item => [item, item])[Symbol.iterator]();
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }
}