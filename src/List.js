import React from 'react'
import './style.css'
import Card from './Card.js'

class List extends React.Component {
    createCards = () => {
         const cardGame = Object.values(this.props.store.allCards)
         console.log(cardGame)
         for(const game of cardGame) {
            return <Card key={game.id} title={game.title} content={game.content} />
         }
    }
    render() {
        return (
            <div>
                <section className="List">
                    <header>
                        <h2>{this.createCards()}</h2>
                    </header>
                    <div className="List-cards">
                        {this.createCards()}
                    </div>
                </section>
            </div>
        )
    }
}


export default List