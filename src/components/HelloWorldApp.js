import React from 'react';
import api from '../api';

export default React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            names: [],
        }
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    componentDidMount: function() {
        api.getTussit().then((data) =>
            this.setState({
                names: data
            })
        );
    },

    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Otsikko</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}
            </div>
        );
    },
});
