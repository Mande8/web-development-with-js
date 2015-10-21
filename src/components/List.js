import React from 'react';
import Card from './Card';

export default React.createClass({
    render: function() {
        return (
            <div className="list">
                List
                <Card />
                <Card />
            </div>
        );
    },
})
