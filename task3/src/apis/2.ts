import axios from "axios";

export const TodoApi = {
  async getTodo<T>() : Promise<Array<T>> {
    let result = null
    try {
      const response = await axios.get("/");
      result = response.data
    } catch {
      console.error("잇쿵 😉..")
      result = []
    }
    return result;
  },
};
