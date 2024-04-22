import axios from "axios";

export const TodoApi = {
  async getTodo() {
    const res = await axios.get("/");
    return res.data;
  },
};
