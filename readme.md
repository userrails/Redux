Redux is a state manager
Redux is a predictable state container for JavaScript apps
Redux helps build apps which run on diff env like client, server, native
Redux strictly allows data to flow in one direction only.
Redux is based on simplified version of Flux, framework dev by fb
store--component--action--reducer--store

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

