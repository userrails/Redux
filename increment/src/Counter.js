import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  // console.log('render', props);
  return (
    <div>
      <h1>Counter Application example</h1>
      <p>Counter: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
    </div>
  )
}

function mapStateToProps(state) {
  //console.log('mapStateToProps', state);

  return {
    count: state.count
  }
}


//const mapDispatchToProps = (dispatch) => ({
//  onIncrementClick: () => {
//    console.log("clickin")
//  }
// });
// you can define using constant as shown above commented lines
function mapDispatchToProps (dispatch) {
  return {
    onIncrementClick: () => {
      console.log("clickin")
    }
  }
}

// connect function creates a new component hooks mapStateToProps and our component 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//export default Counter;//this is happening by connect function