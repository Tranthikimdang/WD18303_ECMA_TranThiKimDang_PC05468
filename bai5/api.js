export class APICaller {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}.json`);
      return await response.json();
    } catch (error) {
      console.error(Error`fetching data from ${endpoint}:`, error);
    }
  }
  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response
        .json()
        .then((data) => {
          return data;
        })
        .catch((err) => {});
    } catch (error) {
      return console.error(`Error posting data to ${endpoint}:`, error);
    }
  }
  async update(endpoint, id, data) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}/${id}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      response
        .json()
        .then((data) => {
          return data;
        })
        .catch((err) => {});
    } catch (error) {
      return console.error(`Error posting data to ${endpoint}:`, error);
    }
  }
  async remove(endpoint, id) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}/${id}.json`, {
        method: "DELETE",
      });
      response
        .json()
        .then((data) => {})
        .catch((err) => {});
    } catch (error) {
      return console.error(`Error deleting data from ${endpoint}:`, error);
    }
  }
}
