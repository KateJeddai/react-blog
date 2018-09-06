import React from 'react';
import { connect } from 'react-redux';
import { sortByName, sortByDate } from '../actions/filterReducer';
import '../css/postFilters.scss';

const PostFilters = (props) => {
    const handleSelect = (e) => {
        e.target.value === 'name' ? props.sortByName() : props.sortByDate();
    };
    return(
        <select className="select-sort" onChange={handleSelect}>
                <option>Sort By</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
        </select>
    );
};

  

const mapDispatchToProps = (dispatch) => ({
    sortByName: () => dispatch(sortByName()),
    sortByDate: () => dispatch(sortByDate())
});

export default connect(undefined, mapDispatchToProps)(PostFilters);

