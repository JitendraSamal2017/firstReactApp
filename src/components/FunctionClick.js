import React from 'react'

function FunctionClick () {

    function buttonClick(){
        console.log('Function button clicked')
    }
    return(
        <div>
            <button onClick={buttonClick}>function click</button>
        </div>
    )
}

export default FunctionClick