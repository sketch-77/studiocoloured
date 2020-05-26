import React from "react";
import "./App.css";
import "/clients.js";

//[client_status: false] add to clients and projects

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      projects: [],
      tasks: [],
    };
  }
}

export default App;
