import React, {Component} from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
        counter: 0
        }
    }

    increment(){
        // this.state.count = this.state.count +1  Dont directly set the state of the class
        this.setState ({
            counter : this.state.counter + 1
        },
        ()=> {console.log('Call back value', this.state.counter)})
        console.log(this.state.counter)
    }

    render(){
        return (
            <div>
                <div>Count - {this.state.counter}</div>
                <button onClick = {()=> this.increment()}>Increment</button>
            </div>
        )
    }
}
export default Counter