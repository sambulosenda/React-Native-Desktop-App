// src/stores/Api.store.ts

import axios from 'axios';
import {IRootStore} from 'Store';

export let createApiStore = (root: IRootStore) => {
  let store = {
    fetchBooks: async () => {
      const res = await axios.get('http://localhost:3000/book')

      return res.data
    },
    addBook: async (title: string) => {
      try {
        const res = await axios.post(
          'http://localhost:3000/book', 
          {title}
        )
  
        return res.data
      } catch(e) {
        console.warn(`error creating book`, e)
      }
    }
  };

  return store;
};