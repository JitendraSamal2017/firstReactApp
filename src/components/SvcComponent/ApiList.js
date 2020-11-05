import React, { Component } from 'react'


class ApiList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            error: null,
            isLoaded: false,
            items: []

        }
    }

    componentDidMount() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('GET', 'POST', 'OPTIONS');
        headers.append('svcAuthCode', 'Sq1Rw2Je3Pr4Dt5');
        headers.append('Origin','http://localhost:3000');

        // fetch("http://localhost:5050/apis",{
        fetch("http://authmgmt-env.eba-m26pz7xm.us-east-2.elasticbeanstalk.com/apis/apis",{
        method: 'GET',
        headers: headers
    }).then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.apiResponse
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        return (
            <div>
                List of APIS in Auth Mgmt App
                {this.state.items.map(item => (
          <li key={item.httpURL}>
            {item.description} {item.releaseVersion}
          </li>
        ))}
            </div>
        )
    }
}

export default ApiList

