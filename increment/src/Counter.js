import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <h1>Counter Application example</h1>
      <p>Counter: {props.count}</p>
      <button>Increment</button>
    </div>
  )
}

function mapStateToProps(state) {
  <!-- console.log('mapStateToProps', state); -->

  return {
    count: state.count
  }
}

// connect function creates a new component hooks mapStateToProps and our component 
export default connect(mapStateToProps)(Counter);

//export default Counter;//this is happening by connect function