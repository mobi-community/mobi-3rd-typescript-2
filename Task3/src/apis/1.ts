import axios from 'axios';
import Q1Component from '@question/q';
export const TodoApi = {
  async getTodo() {
    const res = await axios.get('/');
    return res.data;
  },
};
//interface
