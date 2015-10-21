import React from 'react';
import MegaCounterizer from './MegaCounterizer';

export default React.createClass({
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
