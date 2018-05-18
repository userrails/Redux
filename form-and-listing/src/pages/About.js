import React, {Component} from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

class About extends Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>About Page</h1>
            <p>Node Environment: <b>{process.env.NODE_ENV}</b></p>
            <p>Secret Code: <b>{process.env.REACT_APP_SECRET_CODE}</b></p>
            <p>React App Version: <b>{process.env.REACT_APP_VERSION}</b></p>
            <p>Domain: <b>{process.env.REACT_APP_DOMAIN}</b></p>
            <p><b>{process.env.REACT_APP_FOO}</b></p>
            <p><b>{process.env.REACT_APP_BAR}</b></p>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Grid>
        </Jumbotron>
      </div>
    )
  } 
}

export default About;