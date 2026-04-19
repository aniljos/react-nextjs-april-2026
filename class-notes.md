**React-Next.js Session:  13th April 2026**

No: 9833169784(WA)
email: anil.jos@gmail.com

***Google Forms***
* Introduction: https://forms.gle/bbi2mU4bvM8XsDJdA
* Quiz Day 1: https://forms.gle/Rx1Nthxv26aTFndm8
* Quiz Day 2: https://forms.gle/XEhyS27d6i5xAERs9
* Quiz Day 3: https://forms.gle/fFzJ6ookP3onzJZdA
* Final Quiz: https://forms.gle/nz7wPWJC2Q4AeT919
  
  Feedback: https://forms.gle/437jqGzvmPAm8DZz7

***Documentation***
* React: https://react.dev/
* Nextjs: https://nextjs.org/
* React(Legacy): https://legacy.reactjs.org/

***Links***
* React CDN Links: https://legacy.reactjs.org/docs/cdn-links.html
* Babel cdn: https://cdnjs.com/libraries/babel-standalone/7.26.3

***Git Repositories***
* Training: https://github.com/aniljos/react-nextjs-april-2026
* REST API Mock: https://github.com/aniljos/REST-API-Mock
* Multizones: https://github.com/aniljos/Nextjs-multizones
* Vite MFE: https://github.com/aniljos/vite-mfe-app

***Tutorial***
* https://www.youtube.com/@DaveGrayTeachesCode

  ***Draw.io Links***
  *https://drive.google.com/file/d/1StCXD8voKlD3LhLsrulVJFBqL5rRtXvg/view?usp=sharing
  *https://drive.google.com/file/d/1X0lGRuCstVokd8urx3wSBUeowO6aGLGP/view?usp=sharing

***Vite Project Files***

* index.html: Single HTML page(startup page)
* main.tsx: entry point script
* App.tsx: Root component(App component)
  
  ***React components***

  * Programming: functional & class-component(obselete)
  * Rendering: client-side rendering(CSR) & server-side rendering(SSR)
  
***Component props***
  * functional parameters(reuseable)
  * read-only
  * pass data from the parent component to child & vice-verse
  * children(props.children): this is the prop to access the inner content
  * changes to props will re-render the component

***Component state***
  * any data internal to the component
  * useState: hook to create the state
  * changes to state will re-render the component
  * state changes are asynchronous
  * state changes are batched
  * signature: 1. setState(updatedState) 2. setState(callback), callback(currentValue): updatedValue
  * state must be treated as immutable


***Forms***
  * Controlled input: 2-way binding(value & onChange)
    * Reactive
    * useState hook
  * Uncontrolled input: 
    * Non-reactive
    * useRef hook
  
***Conditional Rendering***
  * ternary operator in the JSX

***useEffect Hook***
  * mount
    * When the depenedency array is empty(no dependencies), the hook in invoked on mount(only once in the lifecycle)
    * API calls on page mount/load
    * DOM initializations
    * Register Events on the window or document object 
    * Starting a poll(setTimout, setInterval)
  * update
    * When there is a dependency
    * Invoked whenever the dependency changes
  * unmount
    * Implemented by retuning a callback from the useEffect of mount
    * Cancelling an API calls
    * Closing a connection
    * Clear the timers
    * Unregister events

***Share state***

  * Local Storage & Session storage
  * Cookies
  * Memory of the application: State management libraies/apis

***Redux***
  * store: central store for data in memory
  * action:
    * an object : 
      * {type: "save_token", data: "token"}, 
      * {type: "update_token", data: "new_token"}
  * reducer:
    * function
    * one per store
    * receives the action and updates the store
    * Must be synchronous
  * middleware
    * intercepts the actions
    * logging the actions/state
    * Async operations
      * Libraries : Redux thunk, Redux Saga
  

***React Redux***
  * Provider component: integrate the store with the components tree.
  * useDispatch: returns a dispatch function.
  * useSelector: select(return) the state or a slice of the state
    * internally subscribes to the store
  * useStore: returns a handle to the store

***Redux toolkit***
  * opinionated, batteries-included library
  * slices: alternative to reducers
    * treat state as mutable
  * action creators:
    * helper function to create actions

***React Context***
 * low level, lightweight library
 * createContext"create the context
 * useContext: access the context
 * Multiple contexts
 * Create a library around context for re-rendering 

***Optimization***
  * create smaller or granular components
  * React 19: 
    * react compiler: optimizations to ensure unnecessary rerenders are avoided
  * React.memo:
    * create a cache(momoized) copy of the component
    * memo is regenerated if the props or state changes
  * Hooks
    * useCallback: create a momoized copy of the callback(passed as prop to a component)
    * useMemo: create a memo of a value
  * Virtual DOM


  
