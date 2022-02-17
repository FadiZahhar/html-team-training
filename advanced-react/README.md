# Advanced React

<img src = './1174949_js_react js_logo_react_react native_icon-2.png'>

## Main Topic

## Hooks

### what is a react hook?

     A Hook is a special function that lets you **hook into** React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

### What is useState?

     The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.

- syntax:

`const [state, setState] = useState(initialValue);`

      * Initial value is the original value we assign to the state
      * state is the current state snapshot of the initial value
      * setState is the new value we want to assign to the state

### useEffect

       The Effect Hook lets you perform side effects in function components.

       By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

     - Side Effects
       Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects
     - cleanup function
       There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.

       Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!

       As we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.

```javascript
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times;`;
  });
}
```

### Usefull links:

      (React official site)[https://reactjs.org/docs/hooks-state.html]
