import React from 'react';
import Counterizer from './Counterizer';
import MegaCounterizer from './MegaCounterizer';
import HelloWorld from './HelloWorld';

export default React.createClass({
    render: function() {
        const { count, names, onIncrementCounter } = this.props;

        return (
            <div>
                {names.map((name, key) =>
                    <HelloWorld key={key} name={name} />
                )}

                <Counterizer count={count} onIncrementCounter={onIncrementCounter} />
                <MegaCounterizer count={count} onIncrementCounter={onIncrementCounter} />
            </div>
        );
    }
});
