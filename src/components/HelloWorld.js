import React from 'react';

function HelloWorld() {
    return React.createElement(
        'h1',
        { className: 'hello', style: { color: 'red' } },
        'Hello World!'
    );
}

export default HelloWorld;
