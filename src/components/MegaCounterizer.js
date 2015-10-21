import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="megaNappula">
                {this.props.count}
            </div>
        );
    },
})
