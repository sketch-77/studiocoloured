import React, { Component } from "react";
import client from "../utils/client";

export default class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      company: "",
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      url: "",
      msg: "",
      client: null,
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addClient = () => {
    const { firstname, lastname, company } = this.state;

    const Client = { firstname, lastname, company };

    client.addClient(Client).then((response) => {
      this.props.onAddClient(response.msg);
    });
  };

  render() {
    const { firstname, lastname, company } = this.state;

    return (
      <div className="mb-4">
        <input
          type="text"
          value={company}
          name="company"
          onChange={this.handleInput}
          placeholder="Company name"
          className="form-control"
        />

        <input
          type="text"
          value={firstname}
          name="firstname"
          onChange={this.handleInput}
          placeholder="First name"
          className="form-control"
        />

        <input
          type="text"
          value={lastname}
          name="lastname"
          onChange={this.handleInput}
          placeholder="Last name"
          className="form-control"
        />

        <button className="btn btn-primary" onClick={this.addClient}>
          Add Client!
        </button>
      </div>
    );
  }
}
