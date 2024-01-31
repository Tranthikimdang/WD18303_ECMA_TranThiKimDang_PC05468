import { APICaller } from "./api.js";
const baseUrl = "https://json-c068a-default-rtdb.firebaseio.com";
export class Comment extends APICaller {
  constructor() {
    super(baseUrl);
    this.endpoint = "comments";
  }

  async post(data) {
    const res = await super.post(this.endpoint, data);
    return res;
  }

  async update(id, data) {
    const res = await super.update(this.endpoint, id, data);
    return res;
  }

  async remove(id) {
    const res = await super.remove(this.endpoint, id);
    return res;
  }

  async getAll() {
    const res = await super.get(this.endpoint);
    return res;
  }

  async getOne(id) {
    const res = super.get(`${this.endpoint}/${id}`);
    return res;
  }
}
