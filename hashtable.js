class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const PRIME = 31;
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const val = char.charCodeAt(0) - 96;
      total = (total * PRIME + val) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }

  get(key) {
    const index = this._hash(key);
    const arr = this.keyMap[index];

    if (!arr) {
      return undefined;
    }

    for (const pair in arr) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  values() {
    const valuesArr = [];

    for (let arr of this.keyMap) {
      if (!arr) {
        continue;
      }

      for (let pair of arr) {
        const val = pair[1];

        if (valuesArr.includes(val)) {
          continue;
        }

        valuesArr.push(val);
      }
    }

    return valuesArr;
  }

  keys() {
    const keysArr = [];

    for (let arr of this.keyMap) {
      if (!arr) {
        continue;
      }

      for (let pair of arr) {
        const key = pair[0];

        if (keysArr.includes(key)) {
          continue;
        }

        keysArr.push(key);
      }
    }

    return keysArr;
  }
}
