import React, {Component} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {Form} from "react-bootstrap";

class AddFriend extends Component {
    state = {
        AddFriend:{
            id:Date.now(),
            name: "",
            age:undefined,
            email:""
        }
    }

    handleSubmit = e => {
        e.prevent.Default()
        this.props.setUpdate(true)
        axiosWithAuth()
        .post("/friends", this.state.AddFriend)
        .then(res => {
            console.log("addFriend response", res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange = e => {
        this.setState({
            AddFriend: {
                ...this.state.AddFriend,
                [e.target.name]: e.target.value
            }
        })
    };

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>

            </Form>
        )
    }
}

export default AddFriend;