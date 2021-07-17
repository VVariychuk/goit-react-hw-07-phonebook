import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

function Filter({ value, onChange}) {
    return (
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={onChange}/>
        </label>
    )    
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func
};

const mapStateToProps = state => ({
    value: phonebookSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

