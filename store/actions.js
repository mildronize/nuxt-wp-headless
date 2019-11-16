import api from '~/common/api'

export const FETCH_POSTS = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    api.getPosts().then(
      response => {
        commit("POSTS", response.data);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const FETCH_ONE_POST = ({ commit, state }, slug ) => {
  return new Promise((resolve, reject) => {
    api.getPost(slug).then(
      response => {
        commit("POST", response);
        console.log(response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};


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