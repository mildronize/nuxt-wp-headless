import api from '../api/index';

export default {
    getPosts: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        api.getPosts().then(
          response => {
            commit("POSTS", response);
            resolve(response);
          },
          response => {
            reject(response);
          }
        );
      });
  }
};