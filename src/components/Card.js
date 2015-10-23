import React from 'react';
import ReactDOM from 'react-dom';
import Classnames from 'classnames';

export default React.createClass({
    render: function() {
        const { card } = this.props;

        const handleClick = function(card) {
            console.log(card.target)
            card.target.className = 'done'
        }

        return (
            <div className="card">
                <b onClick={handleClick.bind(this)} ref={card.id}>{card.title}</b>
                <p>{card.description}</p>
            </div>
        );
    },
})
