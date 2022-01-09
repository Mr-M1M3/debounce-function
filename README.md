
# Debounce function

A simple function for preventing unwanted events to call callback function e.g user clicked Buy button multiple times mistakenly and we don't want our server to process the order multiple times.

# How to use

After importing this script file, just call the debounce function instead of passing a function reference in eventListener callback.

```javascript
  debounce(callback, delay) // it will throw error if you don't pass any of the parameters
```

`callback` function is the function expression you want to call when an event occurs. it accepts one parameter which is [eventListener callback](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback).  

`delay` is the the time in milliseconds you want wait until the event emits next time e.g A user clicked a button and if the button was clicked again  in `delay` milliseconds, `debounce` function will call the callback only once.

`returns` a function which will call the `callback` you passed.

## Example

```javascript
  const button = document.querySelector('#button')
  button.addEventListener("click", debounce(YOUR_CALLBACK, DELAY))
```
