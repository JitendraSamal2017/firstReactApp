import React, { Component} from 'react'

class Welcome extends Component {
    render () {
        // return <h1>Class component</h1>
    return <h1> Welcome {this.props.name} {this.props.surName}</h1>
    }
}

export default Welcome;