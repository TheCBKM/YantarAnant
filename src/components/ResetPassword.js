import React, { Component } from 'react';
import axios from 'axios'
import { route, link, getStorage } from './urls';

class ResetPassword extends Component {
    state = {
        data: {}

    }
    componentDidMount() {
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
       const sendData = {
            _id: this.state.data.user._id,
            contactNumber: 9727780098, 
            oldPassword: 123456, 
            newPassword: 987654

        }
        console.log(sendData)
        axios.post(`${link}/company/resetPassword`,sendData)
            .then((res) => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }
    componentWillMount() {

        if (getStorage('uid')) {
            const obj = getStorage('uid')
            this.state.data = obj;
            console.log(obj)
        }
        else {
            route("/login")
        }



    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ResetPassword;