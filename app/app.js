//ES6 Component
//Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//Import Search Component
import AppContainer from './containers/app.container';


//Search component created as a class
class App extends React.Component {

  //render method is most important
  //render method returns JSX template
  render() {
    return (
      <div>
        <AppContainer />
      </div>
    );
  }
}

//Render to ID content in the DOM
ReactDOM.render(<App />,
  document.getElementById('content')
);
