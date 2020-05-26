export default {
  getProjects: async () => {
    let response = await fetch(`/Projects`);

    return response.json();
  },

  deleteProject: async (id) => {
    let response = await fetch(`/Projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    return response.json();
  },

  getProject: async (id) => {
    let response = await fetch(`/Projects/${id}`);

    return response.json();
  },

  addProject: async (Project) => {
    let response = await fetch(`/Projects`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Project),
    });

    return response.json();
  },
};
