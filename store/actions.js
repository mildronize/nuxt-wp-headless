import api from '../api/index';


export const getPosts = ({ commit, state }) => {
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
};

export const getPost = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPost(slug).then(
      response => {
        commit("POST", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};