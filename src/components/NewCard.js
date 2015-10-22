import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router';

export default React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        const card = {
            id: uuid.v4(),
            title: this.refs.title.value,
            description: this.refs.description.value
        };

        this.props.addCard(card);
    },

    render: function() {
        return (
            <div>
                <Link to="/krello">Back</Link>
                <h3>Create a new card</h3>

                <form onSubmit={this.handleSubmit}>
                    Title: <input type="text" name="title" ref="title" /><br />
                    Description: <input type="text" name="description" ref="description" /><br />
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    },
})
