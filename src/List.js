import React from 'react'
import './style.css'
import Card from './Card.js'

class List extends React.Component {
    createCards = () => {
         this.props.store.allCards
            return <Card key={store.id} title={store.title} content={store.content} />
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