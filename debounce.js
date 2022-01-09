function debounce(fn, delay) {
    if (!fn || !delay) {
        throw new Error("Function or Delay is Undefined", {
            cause: `Not specifying ${ !fn && !delay ? "Function and Delay" : !fn ? "Function" : !delay ? "Delay": "Function or Delay"} when calling Debounce function`
        })
    } else if (typeof fn !== 'function' || typeof delay !== 'number') {
        throw new Error(`${typeof fn !== 'function' ? `${fn} is not a function` : `${delay} is not a function`}`);
    } else {
        let timeOut;
        return function (eventLog) {
            if (timeOut) {
                clearTimeout(timeOut);
            }
            timeOut = setTimeout(() => {
                fn(eventLog);
            }, delay)
        }
    }
}