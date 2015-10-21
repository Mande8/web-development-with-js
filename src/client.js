import '../node_modules/normalize.css/normalize.css';
import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

function getTussit() {
    return Axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div> Hei {this.props.name} </div>
        );
    }
});

const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            names: [],
        }
    },

    componentDidMount: function() {
        getTussit().then((data) =>
            this.setState({
                names: data
            })
        );
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Otsikko</h1>

                {names.map((name, key) =>
                    <HelloWorld key={key} name={name} />
                )}

                <Counterizer count={this.state.count} onIncrementCounter={this.incrementCounter} />
                <MegaCounterizer count={this.state.count} onIncrementCounter={this.incrementCounter} />
            </div>
        );
    },
});

const Counterizer = React.createClass({
    render: function() {
        const {count, onIncrementCounter} = this.props

        return (
            <div className="nappula">
                {count}

                <button onClick={onIncrementCounter}>Moar</button>
                <MegaCounterizer count={count} onIncrementCounter={onIncrementCounter} />
            </div>
        );
    },
})

const MegaCounterizer = React.createClass({
    render: function() {
        return (
            <div className="megaNappula">
                {this.props.count}
            </div>
        );
    },
})

ReactDOM.render(
    <HelloWorldApp />, document.getElementById('app')
);
