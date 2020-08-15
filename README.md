# ReactJs Notes
![Cover](https://i2.wp.com/regroove.ca/wp-content/uploads/2018/07/react-redux-2.png?fit=1024%2C576&ssl=1)

## Topics Covered
* React Fundamentals
   * Introduction
   * Hello World
   * Folder Structure
   * Components
   * Functional Components
   * Class Components
   * Hooks Update
   * JSX
   * Props
   * State
   * useState
   * Destructuring Props & State
   * Event Handling
   * Binding Event Handlers
   * Methods as Props
   * Conditional Rendering
   * List Rendering
   * Lists and Keys
   * Index as Key Anti-pattern
   * Styling and CSS Bascics
   * Basics of Form Handling
   * Component Lifecycle Methods
   * Component Mounting Lifecycle Methods
* React Advanced
   * Fragments
   * Pure Components
   * Memo
   * Refs
   * Refs with Class Components
   * Forwarding Refs
   * Portals
   * Error Boundary
   * Higher Order Components
   * Render Props
   * Context
   * HTTP and React
   * HTTP GET Request
   * HTTP POST Request
* React Hooks
   * Introduction
   * useState Hook
   * useState with Previous State
   * useState with Object
   * useState with Array
   * useState with Hook
   * useEffect Hook
   * Conditionally Run Effects
   * Run effects only once
   * useEffect with Cleanup
   * useEffect with Incorrect Dependency
   * Fetching Data with useEffect
   * useContext Hook
   * useReducer Hook
   * useReducer Hook (Simple State & Action)
   * useReducer Hook (Complex State & Action)
   * Multiple useReducers
   * useReducer with useContext
   * Fetching Data with useReducer
   * useState vs useReducer
   * useCallback Hook
   * useMemo Hook
   * useRef Hook
   * Custom Hooks
   * useDocumentTitle Custom Hook
   * useCounter Custom Hook
   * useInput Custom Hook
* React Redux
   * Introduction
   * Getting Started
   * Three Core Concepts
   * Three Principles
   * Actions
   * Reducers
   * Store
   * Multiple Reducers
   * Combine Reducers
   * Middleware
   * Async Actions
   * Reduc Thunk Middleware
   * React Redux Setup
   * Actions
   * Reducers
   * Store
   * Connect
   * React Redux with Hooks
   * useSelector Hook
   * useDispatch Hook
   * Logger Middleware
   * Redux DevTool Extension
   * Action Payload
   * mapStateToProps
   * mapDispatchToProps
   * Async Actions
   * Redux Thunk Get Request
* Practical React
   * Introduction
   * Icons
   * Toast Notifications
   * Modal
   * Tooltip
   * CountUp
   * Idle Timer
   * Color Picker
   * Credit Cards
   * Date Picker
   * Presentation (MDX) Deck
   * Video Player
   * Loading Indicators
   * Charts
* React Formik (Small Library to handle forms)
   * Introduction
   * Simple Form
   * useFormik Hook
   * Managing From State
   * Handling From Submission
   * Form Validation
   * Validation Function
   * Displaying Error Messages
   * Visite Fields
   * Improving validation UX
   * Schema validation with Yup
   * Reducing boilerplate
   * Formik Component
   * Field Component
   * ErrorMessage Component
   * Nested Objects
   * Arrays
   * FieldArray Component
   * FastField Component
   * Field Level Validation
   * Manually Trigering Validation
   * Disabling Submit
   * Load Saved Data
   * Reset Form Data
   * Building Reusable Formik Controls
   * FormikControl Component
   * Input
   * Textarea
   * Select
   * Radio Buttons
   * Checkbox Group
   * Date Picker
   * Login Form
   * Registration Form
   * Wiring up a UI Library
   * ChakraInput
   * Wrapping Up
* Jest - Testing (Optional)


## Prerequisite
* HTML
* CSS 
* JavaScript

## What is ReactJs?
* 

## Why ReactJs?
*

## Installation/Steps:
* Install NodeJs
* Install React Developer Tools extension
* Create a repository for react app development
* `npx create-react-app .` - Creates the boiler plate for reactjs. 
    * `npm i -g create-react-app github-finder` - Creates the boiler plate inside the directory stated
    * `.`  means to install in current folder 
    * `npm` means it installs then runs
    * `npx` means to directly run without installing it
* `package.json` contains the list of the dependencies required for the project
* `npm install` reads the `package.json` and installs dependencies from it and stores in `node_modules` folder
* Dependencies:
```
"react": "^16.13.1",    // Main library
"react-dom": "^16.13.1",    // Rnder web app componenets in DOM. Unlike in React Native, it is not used.
"react-scripts": "3.4.2"    // Responsible for webpack which is module bundler like creating in `creat-react-app`
```
```
"start": "react-scripts start",     // Script to start web dev server (default port: 3000 )
"build": "react-scripts build",     // Generates static assests for deployment
"test": "react-scripts test",       // For tests
"eject": "react-scripts eject"      // To eject from certain script operations
```
* `public/index.html` is the root HTML for output of components
* `src/index.js` renders the components
* `src/App.js` is the main component for `pubic/index.html`
* `src/App.css` is global CSS for components
* `serviceWorkder.js` is used for PWA (Progressive Web Apps)

## Basics
* React is SPA (Single Page Application) framework/library which means everything is routed through a single file and which is `public/index.html`
* Components can be function or class like function App() in src/App.js
* Each component has `return ()` which contains JSX code

## Cleanup
* Delete src/serviceWorker.js
* Delete src/logo.svg
* Delete src/index.js
* Delete src/App.test
* Delete declarations and references of from rest of the files

## 

`npm install axios`

# Author
* Name - Abhinav
* GitHub - [github.com/abhinavg916](https://github.com/abhinavg916)
