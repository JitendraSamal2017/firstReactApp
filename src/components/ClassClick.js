import React,{Component} from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Class clicked")

    }
    render() {
        return (
        <div>
            <button onClick = {this.clickHandler}>class click</button>
        </div>
        )
    }
}

export default ClassClick