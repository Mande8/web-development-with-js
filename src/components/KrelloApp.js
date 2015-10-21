import React from 'react';
import List from './List';

export default React.createClass({
    render: function() {
        return (
            <div>
                <h1>Krello</h1>
                <h4>Kopio Trellosta</h4>

                <List />
                <List />
                <List />

            </div>
        );
    },
})
