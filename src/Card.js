import React from 'react'


class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <p>I am the card component</p>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}


export default Card