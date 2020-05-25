import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

//[client_status: false] add to clients and projects

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newclient: "",
//       clients: [
//         { id: uuidv4(), title: "bake cake", client_status: false },
//         { id: uuidv4(), title: "wash hair", client_status: false },
//         { id: uuidv4(), title: "do laundry", client_status: false },
//       ],
//     };
//   }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      company: "",
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      url: "",
      clients: [
        {
          id: uuidv4(),
          company: "Baker cake",
          firstname: "Happy",
          lastname: "Chappy",
          email: "happychappy@icecake.org",
          mobile: "+56 789 567 34",
          url: "https://icecake.com",
        },

        {
          id: uuidv4(),
          company: "FYI",
          firstname: "Jordi",
          lastname: "Ferrer",
          email: "jordi@fyi.com",
          mobile: "+34 889 889 889",
          url: "https://fyi.com",
        },
      ],
    };
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
  }

  componentDidMount() {
    fetch("/clients")
      .then((res) => res.json())
      .then((json) => {
        // upon success, update clients
        this.setState({ clients: json });
      });
    // upon failure, show error message
    // .catch((err) => res.status(500).send(err));
  }

  addclient() {
    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: this.state.input }),
    })
      // Continue fetch request here
      .then((res) => res.json())
      .then((json) => {
        // upon success, update clients
        this.setState({ clients: json });
      })
      .catch((err) => console.log(err));
  }

  updateClient(id, method) {
    // update client from database
    fetch(`/clients/${id}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    })
      // upon success, update clients
      .then((res) => res.json())
      .then((clients) => {
        // upon success, update clients
        this.setState({ clients });
      })
      .catch((err) => console.log(err));
  }

  updateClient(id) {
    this.updateClient(id, "PUT");
  }
  clients(id) {
    this.updateClient(id, "DELETE");
  }

  render() {
    return (
      <div className="container">
        <div className="my-4 ">
          <h1>
            <u>Studio Coloured Client List</u>
          </h1>
        </div>

        <input
          id="client"
          name="client"
          placeholder="Add a new client!"
          value={this.state.input}
          onChange={(e) => this.updateInput(e)}
          className="form-control my-2"
        />
        <button
          className="form-control btn btn-outline-dark my-2"
          onClick={(e) => this.addClient()}
        >
          Add
        </button>

        <ul className="my-3 list-group">
          {this.state.clients.map((e, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <span
                onClick={() => this.updateClient(e.id)}
                className={e.complete ? "overline" : null}
              >
                {e.text}
              </span>
              <button
                onClick={() => this.deleteClient(e.id)}
                className="btn btn-sm btn-outline-danger"
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

//   handleClick = () => {
//     const newclient = {
//       id: uuidv4(),
//       title: this.state.newclient,
//       client_status: false,
//     };
//     this.setState({
//       clients: [...this.state.clients, newclient],
//       newclient: "",
//     });
//   };

//   handleInputChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;

//     this.setState({
//       [name]: value,
//     });
//   };

//   // setChecked(index) {
//   //   console.log("the clientnewclient clicked was: ", index);
//   //   //duplicate the array
//   //   const newclients = [...this.state.clients];
//   //   //access my clientnewclient at position "index" and change the checked property
//   //   newclients[index].client_status = !newclients[index].client_status;
//   //   //reset the state
//   //   this.setState({
//   //     clients: newclients,
//   //   });
//   // }

//   setChecked(id) {
//     this.setState((prev) => {
//       const newclient = prev.clients.map((project) => {
//         if (project.id === id) {
//           return {
//             ...project,
//             client_status: !project.client_status,
//           };
//         }
//         return project;
//       });
//       return { clients: newclient };
//     });
//   }

//   getProjects() {
//     const projectclientnewclients = this.state.clients
//       .sort((a, b) => {
//         if (a.title > b.title) return 1;
//         if (a.title < b.title) return -1;
//         return 0;
//       })
//       .map((project, index) => (
//         // Only do this if clientnewclients have no stable IDs
//         <div key={index}>
//           <input
//             type="checkbox"
//             id={"myID" + project.id}
//             name="project"
//             checked={project.client_status}
//             className={project.client_status ? "" : ""}
//             onChange={() => this.setChecked(project.id)}
//           />
//           <label
//             htmlFor={"myID" + project.id}
//             className={project.client_status ? "title-success" : null}
//           >
//             {project.title}
//           </label>
//         </div>
//       ));
//     return projectclientnewclients;
//   }
//   render() {
//     const myprojects = this.getProjects();

//     return (
//       <div className="App">
//         <div className="container title-center">
//           <h3>client LIST</h3>

//           <div className="container d-flex maxwidth: 540px">
//             <div className="input-group mb-3">
//               <div className="input-group-prepend">
//                 <span className="input-group-title" id="basic-addon1">
//                   clientnewclient
//                 </span>
//               </div>
//               <input
//                 type="title"
//                 name="newclient"
//                 className="form-control"
//                 placeholder="To Do clientnewclient here"
//                 aria-label="projectclientnewclient"
//                 aria-describedby="basic-addon1"
//                 value={this.state.newclient}
//                 onChange={this.handleInputChange}
//               />
//               <div className="input-group-append">
//                 <button
//                   type="submit"
//                   onClick={this.handleClick}
//                   className="btn btn-primary"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="Cheklist">{myprojects}</div>
//         </div>
//       </div>
//     );
//   }
// }

// import React from "react";
// import "./App.css";

// // import project from "./project";
// // import projectForm from "./projectForm";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clientlist: [
//         { list: "clean house", done: true },
//         { list: "code", done: false },
//         { list: "yoga", done: false }
//       ],
//       newclient: ""
//     };

//   }

//   handleChange(e) {
//     const value = e.target.value;
//     const name = e.target.name;
//     this.setState({
//       [name]: value
//     });
//   }

//   addclient = () => {

//     const newclient = { list: this.state.newclient, done: false}
//     this.setState({
//       clientlist: [newclient, ...this.state.clientlist],
//       newclient: ""
//     });
//   }

//   render() {
//     const { clientlist, newclient } = this.state;

//     return (
//       <div>
//         <h2> My To Do List</h2>
//         <ul>
//           {clientlist.map((client, index) => {
//             return <li key={index}>{client.list} </li>;
//           })}
//         </ul>
//         <input
//           type="title"
//           placeholder="Enter client"
//           value={newclient}
//           name="newclient"
//           onChange={(e) => this.handleChange(e)}
//         />
//         <button
//           type="submit"
//           onClick={this.addclient}
//           className="btn btn-primary"
//         />
//       </div>
//     );
//   }
// }

// export default App;
