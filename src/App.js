import React from 'react';
import List from './List.js';
import Card from './Card.js';

class App extends React.Component {
  render() {
    return (
      <main>
        <p>Heeeeeey</p>
        <List header='I am the header' cards='I got all the cards'/>
        <Card title='Random Card' content='Its a Joker!'/>
      </main>
    )
  }
}

export default App;
