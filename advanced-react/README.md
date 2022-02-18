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

## useRef

It can be used to access a DOM element directly.

It can be used to store a mutable value that does not cause a re-render when updated.

If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

**Example**

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

useRef() only returns one item. It returns an Object called current.

## useReducer

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
Here’s the counter example from the useState section, rewritten to use a reducer:

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

**Specifying the initial state**
There are two different ways to initialize useReducer state. You may choose either one depending on the use case. The simplest way is to pass the initial state as a second argument:

```javascript
const [state, dispatch] = useReducer(reducer, { count: initialCount });
```

### Usefull links:

      (React official site)[https://reactjs.org/docs/hooks-state.html]
