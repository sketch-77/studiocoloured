export default {
    getClientList: async () => {
      let response = await fetch(`/clients`);
  
      return response.json();
    },
  
    getClient: async (id) => {
      let response = await fetch(`/clients/${id}`);
  
      return response.json();
    },
  