import React, { Component } from 'react';
import MyPhotos from './MyPhotos';
import Amplify from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';
import { amplify_config } from './config'

Amplify.configure(amplify_config);

class App extends Component {

  render() {
    return (
      <div className="container">
        <Authenticator>
          <MyPhotos />
        </Authenticator>
      </div>
    );
  }
}

export default App;
