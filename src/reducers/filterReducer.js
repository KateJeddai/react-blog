export default (state = { sortBy: 'name' }, action) => {
    switch(action.type){
        case 'SORT_BY_NAME': 
            console.log(action.payload);
            return {...state, sortBy: 'name'};
        case 'SORT_BY_DATE':
            console.log(action.payload);
            return {...state, sortBy: 'date'};
    }
    return state;
};