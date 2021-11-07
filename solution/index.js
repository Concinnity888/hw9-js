module.exports = class {
  constructor(values = []) {
    this._values = [];

    for (const value of values) {
      this.add(value);
    }
  }

  add(value) {
    if (!this.has(value)) {
      this._values.push(value);
    }

    return this;
  }

  delete(value) {
    const idx = this._values.indexOf(value);
    this._values.splice(idx, 1);
  }

  has(value) {
    return this._values.includes(value);
  }

  get size() {
    return this._values.length;
  }

  clear() {
    this._values = [];
  }

  forEach(cb, thisArg) {
    if (thisArg) {
      this._values.forEach(value => {
        cb.call(thisArg, value);
      });
    } else {
      this._values.forEach(value => {
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
    return this._values.map(item => [item, item])[Symbol.iterator]();
  }

  [Symbol.iterator]() {
    return this._values[Symbol.iterator]();
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }
}