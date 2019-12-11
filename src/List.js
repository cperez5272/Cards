
import React from 'react'
import './style.css'
import Card from './Card.js'

class List extends React.Component {
    render() {
        return (
            <div>
                <section className="List">
                    <header>
                        <h2>{this.props.header}</h2>
                    </header>
                    <div className="List-cards">
                        {this.props.cards.map((card) => {
                            return <Card key={card.id} title={card.title} content={card.content}/>
                        })}
                    </div>
                </section>
            </div>
        )
    }
}
export default List