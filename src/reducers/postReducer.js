export default (state = {posts: []}, action) => {
    switch(action.type){
        case "ADD_POST": 
            state.posts.push({
                  title: action.payload.title, 
                  text: action.payload.text, 
                  time: action.payload.time}
               );
            //console.log(state.posts);
        
            break;
    }
    return state;
};