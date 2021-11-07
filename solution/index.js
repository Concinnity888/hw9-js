module.exports = class {
  constructor(values = []) {
    this.values = {};

    values.forEach((value) => {
      this.add(value);
    });
  }

  [Symbol.iterator]() {
    const values = Object.keys(this.values);
    let idx = 0;
    console.log(1, values);

    return {
      next() {
        const result = {
          value: Number(values[idx]) || values[idx],
          done: idx >= values.length
        };

        idx++;

        return result;
      }
    }
  }

  add(value) {
    if (!this.values.hasOwnProperty(value)) {
      this.values[value] = typeof value;
    }

    return this;
  }

  delete(value) {
    if (!this.values.hasOwnProperty(value)) {
      return false;
    }

    delete this.values[value];
    return true;
  }

  has(value) {
    return this.values.hasOwnProperty(value);
  }

  get size() {
    return Object.values(this.values).length;
  }

  clear() {
    this.values = {};
  }

  forEach(cb, thisArg) {
    Object.values(this.values).forEach(value => {
      if (arguments.length === 2) {
        cb.call(thisArg, value);
      }
      else {
        cb(value);
      }
    });
  }

  keys() {
    return this.values();
  }

  values() {
    return this[Symbol.iterator]();
  }

  entries() {
    return Object.values(this.values).map(item => [item, item])[Symbol.iterator]();
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }
}
