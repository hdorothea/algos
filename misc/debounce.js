function debounce(func, wait) {
  let startTime = false;
  return () => {
    if (!startTime) {
      startTime = (new Date()).getTime();
    }
    const callTime = (new Date()).getTime();
    if (callTime - startTime >= wait) {
      func();
      startTime = false;
    }
  };
}


const a = () => console.log('foo');
const b = debounce(a, 100);

setTimeout(b, 50);
setTimeout(b, 200);
