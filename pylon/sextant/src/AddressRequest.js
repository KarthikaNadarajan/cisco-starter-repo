import React, { Component } from 'react';
class AddressRequest extends Component {
    constructor(props){
    super(props);
    this.state = {
                    ip: null,
                    url : props.url
                 }
    }
    componentDidMount() {
            fetch(this.state.url)
                .then(response => response.json())
                .then(data => this.setState({ ip: data.ip }));
        }
    render(){
    return(

        <p>{this.state.ip}</p>
        );
    }

}
export default AddressRequest;