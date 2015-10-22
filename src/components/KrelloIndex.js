import React from 'react';
import { Link } from 'react-router';
import Card from './Card';

export default React.createClass({
    render: function() {
        return (
            <div>
                <Link to="/krello/new">Create a new card</Link>

                {this.props.cards.map(function(card) {
                    return <Card key={card.id} card={card} />
                })}
            </div>
        );
    }
})
