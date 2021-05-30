function MyInstanceof(left, right) {
  //let proto = Left.__proto__;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(MyInstanceof([1], Array));
