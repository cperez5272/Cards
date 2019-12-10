import React from 'react'
import './style.css'


class List extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <section className="List">
                    <header>
                        {this.props.header}
                    </header>
                    <div className="List-cards">
                        {this.props.cards}
                    </div>
                </section>
            </div>
        )
    }
}


export default List