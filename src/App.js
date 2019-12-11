import React from 'react';
import List from './List.js';
import Card from './Card.js';
import './style.css'
import STORE from './Store.js'

class App extends React.Component {
  createLists = () => {
    return STORE.lists.map(list => {
      const cards = list.cardIds.map(id => {
        return STORE.allCards[id];
      });
      return <List store={STORE} key={list.id} header={list.header} cardIds={cards} />
    });
  }
  render() {
    console.log(STORE.lists)
    return (
      <main>
        <header>
          <h1>
            Card Game! Yaaaay!
          </h1>
          <div className='App-list'>
            
            {this.createLists()}
            
          </div>
        </header>

      </main>
    )
  }
}

export default App;