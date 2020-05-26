import React, { Component } from "react";
import project from "../utils/project";
import clients from "../clients";
import getClientList from "../components/getClientList";

const client_id = { clients };

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "client_id" }; // do we get this from the client list??
    this.state = {
      title: "",
      project_status: "",
      client_id: "",
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addProject = () => {
    const { title, project_status } = this.state;

    const Project = { title, project_status };

    project.addProject(Project).then((response) => {
      this.props.onaddProject(response.msg);
    });
  };

  render() {
    const { title, project_status } = this.state;

    return (
      <div className="mb-4">
        <input
          type="text"
          value={client_id}
          name="client_id"
          onChange={this.handleInput}
          placeholder="Client"
          className="form-control"
        />
        {/* from a drop down list choose the client add the project */}

        <select value={this.state.value} onChange={this.handleChange}></select>
        <input
          type="text"
          value={title}
          name="title"
          onChange={this.handleInput}
          placeholder="task description"
          className="form-control"
        />

        <select value={this.state.value} onChange={this.handleChange}></select>
        <input
          type="text"
          value={project_status}
          name="project_status"
          onChange={this.handleInput}
          placeholder="Last name"
          className="form-control"
        />
        <button className="btn btn-primary" onClick={this.addProject}>
          Add Project!
        </button>
      </div>
    );
  }
}
