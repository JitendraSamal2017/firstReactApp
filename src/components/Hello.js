import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //     <h1>Hello JSX</h1>
    //     </div>
    // )

    // return React.createElement('div', null, React.createElement('h1',null,'Hello JSX'))
    // This one is used to add id and other elements
    return React.createElement('div', {id:'hello',className:'abc'}, React.createElement('h1',null,'Hello JSX'))
}

export default Hello;