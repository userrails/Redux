Redux is a state manager
Redux is a predictable state container for JavaScript apps
Redux helps build apps which run on diff env like client, server, native
Redux strictly allows data to flow in one direction only.
Redux is based on simplified version of Flux, framework dev by fb
store--component--action--reducer--store
Redux is framework agnostic. Learn it once, use it on Vuejs, Angular

Setup the environment:
- Webpack for bundling
- Babel for transpiling ES code
- Gulp for task running

Alternatives: Browerify, TypeScript, RollupJS, or even ES5

Actions and action creators:
- communicate data from View to main Reducer
- it often do not mutate the data
- You can put Asyn logic (fetch, put, etc)

Reducers:
- recieve data from actions
- receive current state
- create new state using old state and content of the action data

Store:
- connect entire application
- subscribe directly with a callback or use a connector to work with React
- Dispatch

Dispatch:
- Sends data through store which invokes the main reducer with current state and
  new data
- run the actions and start the data cycle

Also see https://github.com/reduxjs/redux-devtools
https://github.com/reactjs/redux

Organizing Redux code:

src/
  actions/
     cart-actions.js
  index.js
  reducers/
     cart-reducers.js
     index.js
     product-reducers.js
  store.js

Store (state - only one):
 In Redux, all data i.e state is held in a container known as the store which is
only one in the app.
Store is a state tree where state of all objects are kept.
Any UI component can access the state of the particular object directly from the
store.

Action: 
To change the state from local or remote component, an action need to be
dispatched. Dispatch means sending actionable information to the store.

Reducers:
When store recieve action, it delegates it to the relevant reducer.
A reducer is simply a function that looks at the previous state, performs an
action and returns a new state.

State while using React is using this.state and local state of component are updated by setState()
method.

why and when to use Redux?
>> multiple React components needs to access the same state but do not have any
>> parent/child relationship
>> if you feel uncomfortable to pass down the state to multiple components with
>> props

* Redux is not useful for smaller apps, but doesn't harm at all while
  implementing.

Redux Store
------------
The Redux store is fundamental i.e the state of the whole application lives
inside the store.
Let's create the store to wrap up the state.

Go to React development environment and install Redux:

```first 
cd reduxapp
npm i redux --save-dev
```
create dir for the store

```
mkdir -p src/js/store
```

create a new file index.js in src/js/store and finally initialize the store:
 ```
 //src/js/store/index.js
 import {createStore} from 'redux';
 import rootReducer from '../reducers/index';

 const store = createStore(rootReducer);

 export default store;
```

createStore is the function for creating the Redux store.
createStore takes a reducer as the first argument, rootReducer in our case.

You may also pass an initial state to createStore sometime. Passing an initial
state is useful for server side rendering. Anyway, the state comes from
reducers.

In Redux reducers produce the state.

Redux reducers
---------------
while an initial state is useful for server side rendering, in Redux the state must return
entirely from reducers.

Again, a reducer is the js function.

Reducer takes two parameters: the current state and an action

Another principal of Redux is that the state is immutable and cannot change in
place.

so reducer is pure function which returns the exact same output for the given
input.

In plain React the local state changes in place with setState. In Redux you
cannot do that.

Reducers will do nothing than returning the initial state.

* Create a directory for the root reducer
``` 
mkdir -p src/js/reducers
```

* create a new file named as index.js in the src/js/reducers
// src/js/reducers/index.js

```
 const initialState = {
  posts: []
 };
```

```
const rootReducer = (state = initialState, action) => state;
```

```
export default rootReducer;
```

Redux actions
--------------
Reducers produces the state of the app. but how does reducer know when to
produce the next state? Another principal of Redux is the way to change the
state by sending the signal to store, this signal is an action. Dispatching an
action is the process of sending out a signal.

Now how do you change an immutable state? You won't. The resulting state is copy
of current state plus the new data.

Redux actions Javascript objects.

Action looks like this:
```
{
  type: 'ADD_POST',
  payload: {name: 'React Redux Tutorial', id: 1}
}
```

Every action needs a type property for describing how the state should change.
You can specify a payload as well. In above eg, payload is a new post. A reducer
will add the post to the current state later.

It is best practice to wrap every action within a function. Such function is an
action creator.

now put everything together by creating a simple Redux action.

Create a directory for the actions:
```
mkdir -p src/js/actions
```

Then create a new file named index.js in src/js/actions:

// src/js/actions/index.js
```
export const addPost = post => ({ type: "ADD_POST", payload: post });
```

Here type property is a string.
The reducer will use the string to determine how to calculate the next state.

String has posibility of typos and duplicates, so it is better to declare type
property as constant.

```
mkdir -p src/js/constants
```

Then create a new file named action-types.js into the src/js/constants

```
//src/js/constants/action-types.js
export const ADD_POST = "ADD_POST";

vim src/js/actions/index.js and update the action to use action types:
// src/js/actions/index.js

import { ADD_POST } from "../constants/action-types";

export const addPost = post => ({ type: ADD_POST, payload: post });
```


// Refactoring the Reducers
A reducer is JS function taking two parameters the state and the action.
A reducer function has a switch statement(can use if/else).

The reducer calculates the next state depending on the action type. Moreover, it
should return at least the initial state when no action type matches.
When action type matches a case clause the reducer calculates the next state and
returns a new object.
```
switch (action.type) {
  case ADD_POST:
    return { ...state, posts: [...state.posts, action.payload]};
  default:
    return state;
}
```
the reducer created in the prev section does nothing than returning the initial
state, we need to fix that:

vim src/js/reducers/index.js and update the reducer as follows:

```
import { ADD_POST } from "../constants/action-types";

const initialState = {
   posts: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
       state.posts.push(action.payload);
       return state;
    default:
      return state;
  }
};

export default rootReducer;
```
// Array.prototype.push is an impure function: it alters the original array.
// Making our reducer compliant is easy, using Array.prototype.concat in place
of Array.prototype.push is enough to keep the initial array immutable:
```
import { ADD_POST } from "../constants/action-types";
const initialState = {
 articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) };
    default:
      return state;
  }
};
export default rootReducer;
```

Use spread operator 

```
import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
  articles=[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload]};
    default:
      return state;
  }
};
export default rootReducer;
```

In the example above the initial state is left untouched.
The initial article arrary doesn't change in place.
The initial state object doesn't change as well. The resulting state is a copy of the initial state.
There are two key points for avoiding mutations in Redux:
* Using concat(), slice(), and ...spread for arrays
* using Object.assign() and ...spread for objects

The object spread operator is still in stage 3, install it to avoid a syntaxError Unexpected token when using the object spread operator in Babel:

```
npm i --save-dev babel-plugin-transform-object-rest-spread
```

Open up .babelrc and update the configuration:
```
"presets": ["env", "react"],
"plugins": ["transform-object-rest-spread"]
```

Redux store methods
Redux itself is a small library (2KB). The Redux store exposes a simple API for managing the state.
Some important methods are:
* getState for accessing the current state of the application
* dispatch for dispatcing an action
* subscribe for listening on state changes

To use above methods, we need to export as global variables the store and the action we created earlier.
Create src/js/index.js and update the file with the following code:

```
import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;
```

Open up src/index.js as well, cleanup it's content and update it as follows:
```
import index from "./js/index"
```

Now run webpack dev server (or Parcel) with:

```
npm start
```

head over http://localhost:8080/ and open up the console with F12.

Since we have exported the store as a global variable we can access its methods. Give it a try!

Start by accessing the current state:
```
store.getState()
```

output:
{articles: Array(0)}

Zero articles. In fact we haven't update the initial state yet.

To make things interesting we can listen for state updates with subscribe. The subscribe method accepts a callback that will fire whenever an action is dispatched.
Dispatching an action means notifying the store that we want to change the state.

Register the callback with:
```
store.subscribe(() => console.log('Hello Redux!!'))
```

To change the state in Redux we need to dispatch an action. To dispatch an action you have to call the dispatch method.

we have an action at our disposal: addArticle for adding a new item to the state.

Let's dispatch the action with:
```
store.dispatch(addArticle({name: 'React redux tutorials for beginners', id: 1}))
```
Running the above code, will see
Hello Redux!!

To verify that the state changed run again:
```
store.getState()
```

The output should be:
```
{articles: Array(1)}
```

Connecting React with Redux
---------------------------
Now we understand:
* how to access the current state with getState
* how to dispatch an action dispatch
* how to listen for state changes with subscribe

Now let us work with React and Redux together.
should i call getState() with a React component? how do i dispatch an action from a React component? And so on:
For React there is react-redux.

``
npm i react-redux --save-dev
``

To demonstrate how React and Redux work together, we'll build a super simple application. The application is made of the following components:
* an App component
* a List component for displaying articles
* a Form component for adding new articles

React-Redux
------------
React-redux is a Redux binding for React. It is a library for connecting Redux and React in an efficient way.
the most important method you'll work with is connect.
React-redux library connects a React component with the Redux store.

You will use connect with two or three arguments depending on the use case. The fundamental things to know:
* the mapStateToProps function
* the mapDispatchToProps function

what does mapStateToProps do in react-redux? it connects a part of the Redux state to the props of a React component.
By doing so a connected React component will have access to the exact part of the store it needs.

What does mapDispatchToProps do in react-redux? it works for actions, which connects Redux actions to React props. This way a connected React component will be able to dispatch actions.

App component and Redux store
------------------------------
mapStateToProps connects a portion of the Redux state to the props of a React component. is this enough for connecting Redux with React? No, it's not.

We are using Provider to connect React and Redux.

Provider is an higher order component coming from react-redux.

Provider wraps up your React application and makes it aware of the entire Redux's store.
In Redux the store manages everything. React must talk to the store for accessing the state and dispatching the actions.

Open up src/js/index.js, write below code.

```
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
```
From above script, we analyse that Provider wraps up the entire REact application and it gets the store as a prop.
As we now requires App component, let's create that. App should import a List component and render itself.

Create the directory for holding the components:
```
mkdir -p src/js/components
cd src/js/components
touch App.js
```

```
//src/js/components/App.js
import React from "react";
import List from "./List";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
  </div>
);

export default App;
```

Now create a List component.

List component and Redux state
------------------------------
Our new component, List, will interact with Redux store.
Note: The key for connecting a React component with Redux is connect.

Connect takes at least one argument.

Since we want List to get a list of articles it's matter of connecting state.articles with the component, with, mapStateToProps.
Now create List.js component.

```
touch src/js/components/List.js

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles }
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>{el.title}</li>
    ))
    }
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
```

The List component receives the prop articles which is a copy of the articles array. Such array lives inside the Redux state we created earlier. It comes from the reducer which is shown below:

```
const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload]};
    default: 
      return state;
  }
};
```

Then it's a matter of using the prop inside JSX for generating a list of articles:

```
{articles.map(el => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
))}
```

Note: make habit of validating props with PropTypes

Finally component is exported as List. List is the result of connecting the stateless component ConnectedList with the Redux store.
A stateless component does not have it's own local state. Data gets passed to it as props.

first understand the connect and mapStateToProps, then move to next session.


Form component and Redux Actions
---------------------------------
The form component is complex than List. It is the form for adding new items to our application.

Plus it is a stateful component.

A stateful component in React is a component carrying it's own local state.

Note: Even when using Redux it is totally fine to have stateful components.

Not every piece of the application's state should go inside Redux.

In this example we don't want any other component to be aware of the Form local state.

what does the component do?
it contains some logic for updating the local state upon a form submission.

Plus it receives a Redux action as Prop. This way it can update the global state by dispatching the addArticle action.

```
touch src/js/components/Form.js

//src/js/components/Form.js
import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {title} = this.state;
    const id = uuidv1();
    this.props.addArticle({title, id});
    this.setState({title: ""});
  }

  render() {
    const {title} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-success btn-lg">SAVE</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
```

mapDispatchToProps connects Redux actions to React props.This way a connected component is able to dispatch actions.
Let's see how the action gets dispatched in the handleSubmit method:

```
  handleSubmit(event) {
    event.preventDefault();
    const {title} = this.state;
    const id = uuidv1();
    this.props.addArticle({title, id}); // Relevant Redux part!!
  }
```
Finally the component gets exported as Form. Form is the result of connecting ConnectedForm with the Redux store.

Side note: the first argument for connect must be null when mapStateToProps is absent like in the Form example. Otherwise you'll get TypeError: dispatch is not a function.

Our components are all set!!

Update the App to include the Form component:

```
import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new Article</h2>
      <Form />
    </div>
  </div>
);

export default App;
```

Installation uuid:
```
npm i uuid --save-dev
```

Redux form consists of following things:
* a single reducer
* a higher order form component
* a field component

Application Directory Structure:
--------------------------------
app/
  Header.js
  Sidebar.js
  App.js
  reducers.js
  routes.js
product/
  ProductComponent.js
  ProductContainer.js
  ProductActions.js
  ProductList.js
  ProductItem.js
  ProductImage.js
  productReducer.js

https://marmelab.com/blog/2015/12/17/react-directory-structure.html


