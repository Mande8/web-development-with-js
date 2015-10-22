import React from 'react';
import Card from './Card';

export default React.createClass({
    render: function() {
        return (
            <div className="list">
                {this.props.name}

                {this.props.children}
            </div>
        );
    },
})
