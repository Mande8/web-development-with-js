import React from 'react';
import { List } from 'immutable';
import CardList from './List';
import Card from './Card';
import uuid from 'uuid';

export default React.createClass({
    getInitialState: function() {
        return {
            cards: List()
        }
    },

    addCard: function(card) {
        this.setState({
            cards: this.state.cards.push(card)
        });
    },

    render: function() {

        return (
            <div>
                <h1>Krello</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        cards: this.state.cards,
                        addCard: this.addCard
                    }
                )}

            </div>
        );
    },
})
