import React, { Component } from 'react';
import { route, link ,getStorage} from './urls';
import axios from 'axios';

class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fback: ''
        }
        this.submitBtn = this.submitBtn.bind(this);
    }

    state = {
        fback: '',
        data: {},
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
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
    submitBtn() {
        const sendData = {
            comment: this.state.fback,
            company: this.state.data.companyId,
            companyName: this.state.data.user.company.name
        }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${link}/feedback/save`,sendData).then((res)=>{
            console.log(res);
            window.location.reload()
            //route("/dash")
        })
    }
    render() {
        
        return (
            <div >
                <div >
                    <label>FeedBack</label>
                    <textarea
                        name="fback" onChange={ (event) => this.handleUserInput(event) } />
                </div>
                <button id="focus" type="submit" className="btn btn-primary" onClick={ this.submitBtn } >
                    Submit
                                    </button>
            </div>
        );
    }
}

export default FeedBack;