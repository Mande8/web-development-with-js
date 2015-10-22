import React from 'react';

export default React.createClass({
    render: function() {
        const { card } = this.props;

        const handleClick = function() {
            console.log("click")
        }

        return (
            <div className="card" onClick={handleClick}>
                <b>{card.title}</b>
                <p>{card.description}</p>
            </div>
        );
    },
})
