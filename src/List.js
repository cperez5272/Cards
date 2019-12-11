import React from 'react'
import './style.css'
import Card from './Card.js'

class List extends React.Component {
    createCards = () => {
        return this.props.STORE.allCards.map(card =>{
            return <Card key={card.id} title={card.title} content={card.content} />
        })
    }
    render() {
        console.log(this.props)
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