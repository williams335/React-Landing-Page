import React from 'react';

//import Acceuil from './components/Acceuil';
import Topbar from './components/Topbar';

class App extends React.Component{
  state = {
    todos:[
          {
            id:1,
            title: 'first title',
            complete: true
          },
          {
            id:2,
            title: 'second title',
            complete: false
          },
          {
            id:3,
            title: 'third title',
            complete: true
          },
          {
            id:4,
            title: 'fourth title',
            complete: false
          },
    ]
  }
  render() {
console.log(this.state.todos)
  return (
    <div className="App">
      
      <Topbar/>

    </div>
  );
}
}

export default App;
