import React from 'react';
import List from './List.js';
import Card from './Card.js';
import './style.css'

class App extends React.Component {

  createLists = () => {
    return this.props.STORE.lists.map(list =>{
      return <List key={list.id} header={list.header} cardIds={list.cardIds}/>
    })
  }

  render() {
    console.log(this.props)
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