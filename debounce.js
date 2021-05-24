//触发事件n秒后只会执行一次，如果重复触发，则计时器重新计算
function debounce(func, delay) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
