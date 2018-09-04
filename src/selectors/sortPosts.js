export default (posts, { sortBy }) => {
   return posts.sort((a, b) => {
        if(sortBy === 'name'){
            return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
        }   
        else if(sortBy === 'date'){
            return a.time > b.time ? 1 : -1;
        }
    });
}