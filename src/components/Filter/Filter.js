import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

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
    value: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

