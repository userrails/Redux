import React, {Component} from 'react';
import Pic from '.././assets/img/banner.jpg'

class Home extends Component {
  render () {
    return (
      <div>
        <h2 class="label label-info">Home Page</h2>
        <img src={Pic} alt="Logo"></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  } 
}

export default Home;