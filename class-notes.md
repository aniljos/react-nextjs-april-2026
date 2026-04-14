**React-Next.js Session:  13th April 2026**

***Google Forms***
* Introduction: https://forms.gle/bbi2mU4bvM8XsDJdA
* Quiz Day 1: https://forms.gle/Rx1Nthxv26aTFndm8

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

***Vite Project***

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

