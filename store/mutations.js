export default {
    POSTS: (state, posts) => {
      state.posts = posts;
    },
    POST: (state, newPost) => {
      console.log("newPost");
      console.log(newPost);
      if( state.posts.length == 0){
        state.posts = [ newPost ];
      }else 
        state.posts = state.posts.map((post) => {
          if(post.slug == newPost.slug) return newPost;
          return post;
        });
    }
  };
  