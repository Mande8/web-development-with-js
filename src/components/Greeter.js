import React from 'react';

export default React.createClass({
    render: function() {
        const name = this.props.params.name;

        return (
            <h2>Hei {name}</h2>
        );
    }
});
