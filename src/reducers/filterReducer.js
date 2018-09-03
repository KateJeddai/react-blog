export default (state = { sortBy: 'name' }, action) => {
    switch(action.type){
        case 'SORT_BY_NAME': 
            return {...state, sortBy: 'name'};
            break;
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
            break;
    }
    return state;
};