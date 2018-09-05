export default (state = {posts: []}, action) => {
    switch(action.type){
        case "ADD_POST": 
            state.posts.push({
                  id: action.payload.id,
                  title: action.payload.title, 
                  text: action.payload.text, 
                  time: action.payload.time
                });
           
        case "EDIT_POST":
            let posty = state.posts;
                posty = posty.map((post) => {
                console.log(post.id === action.payload.id);
                if(post.id === action.payload.id){
                    post.title = action.payload.title;
                    post.text = action.payload.text;
                    post.time = action.payload.time;
                    return post;
                }
              
                else{
                    return post;
                }
            });
        case 'REMOVE_POST':
            state.posts = state.posts.filter(post => post.id !== action.id);    
    }
    if(state.posts.length > 0) console.log('State in reducer: ' + state.posts[0].title);
    return state;
};