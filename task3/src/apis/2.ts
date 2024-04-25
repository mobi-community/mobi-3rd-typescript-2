import axios from "axios";

export const TodoApi = {
  async getTodo<T>() : Promise<Array<T>> {
    let res = null
    try {
      res = await axios.get("/");
    } catch (e) {
      throw new Error("데이터 패칭 실패 😉") 
    }
    return res.data;
  },
};
