import React from 'react'
import './style.css'


class Card extends React.Component {
    render() {
        return (
            <div className="Card">
               <button type='button'>
                   Delete this
                </button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}


export default Card