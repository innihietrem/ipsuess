class MyObject {
  constructor(writable) {
    this._writable = writable;
  }

  writable() {
    return this._writable;
  }
}

const obj = new MyObject(false);

for (let i = 0; i < 10; i++) {
  if (!obj.writable()) {
    break;
  }
  console.log(i);  // This will not be executed if obj is not writable
}
