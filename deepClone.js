function deepClone(obj) {
  if (typeof obj !== "object") return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
//test
let obj = {
  a: 2,
  b: {
    c: 1,
  },
};
let newObj = deepClone(obj);
console.log(newObj);
