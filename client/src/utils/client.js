export default {
  getClients: async () => {
    let response = await fetch(`/clients`);

    return response.json();
  },

  deleteClient: async (id) => {
    let response = await fetch(`/clients/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    return response.json();
  },

  getClient: async (id) => {
    let response = await fetch(`/clients/${id}`);

    return response.json();
  },

  addClient: async (client) => {
    let response = await fetch(`/clients`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(client),
    });

    return response.json();
  },
};
