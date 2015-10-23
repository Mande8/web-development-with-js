import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router';

export default React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        const card = {
            id: uuid.v4(),
            title: this.refs.title.value,
            description: this.refs.description.value,
            list: this.refs.list.value
        };

        this.props.addCard(card);
    },

    render: function() {
        return (
            <div>
                <Link to="/krello">Back</Link>
                <h3>Create a new card</h3>

                <form onSubmit={this.handleSubmit}>
                    Title: <input type="text" ref="title" /><br />
                    Description: <input type="text" ref="description" /><br />
                    Add to list:
                    <select ref="list">
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select><br />
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    },
})
