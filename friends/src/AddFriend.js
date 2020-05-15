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
                <h2>Add a New Friend</h2>
                <input
                    name="name"
                    value={this.state.AddFriend.name}
                    placeholder="Name"
                    onChange={this.handleChange}
                    />
                <input
                    name="age"
                    value={this.state.AddFriend.age}
                    placeholder="Age"
                    onChange={this.handleChange}
                    />
                <input
                    name="email"
                    value={this.state.AddFriend.email}
                    placeholder="Email"
                    onChange={this.handleChange}
                    />
            </Form>
        )
    }
}

export default AddFriend;