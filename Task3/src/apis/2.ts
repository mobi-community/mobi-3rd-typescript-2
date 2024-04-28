import axios from 'axios';

export const TodoApi = {
  async getTodo() {
    const res = await axios.get('/');
    return res.data;
  },
};
//axios에 제네릭을 사용하여 타입을 부여해보세요!
