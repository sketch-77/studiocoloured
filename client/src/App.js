import React, { Component } from "react";
import ClientForm from "./components/clientForm";
import client from "./utils/client";

// import "./AdminView.css";

export default class App extends Component {
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

  componentDidMount() {
    this.getClients();
  }

  getClients = () => {
    client.getClients().then((response) => {
      this.setState({ clients: response });
    });
  };

  deleteClient = (id) => {
    client.deleteClient(id).then((response) => {
      this.setState({ msg: response.msg });
      this.getClients();
    });
  };

  getClient = (id) => {
    client.getClient(id).then((response) => {
      this.setState({ client: response });
    });
  };

  onAddClient = (msg) => {
    this.setState({ msg });
    this.getClients();
  };

  render() {
    const { clients, msg, client } = this.state;

    return (
      <div className="Admin container">
        <h1>Studio Coloured Client</h1>

        <ClientForm onAddClient={this.onAddClient} />

        {msg && <div className="alert alert-info">{msg}</div>}

        <ul className="list-group">
          {clients.map((client) => (
            <li key={client.id} className="list-group-item">
              <span onClick={() => this.getClients(client.id)}>
                {client.firstname} {client.lastname}
              </span>
              <button
                className="btn btn-outline-danger"
                onClick={() => this.deleteClient(client.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {client && (
          <div className="card card-body mt-5">
            <p>This is the client profile</p>
            <h2>
              {client.firstname} {client.lastname}
            </h2>
          </div>
        )}
      </div>
    );
  }
}
