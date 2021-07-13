import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsListItm.module.css'

export default function ContactsListItm({name, number, onClickHendler}) {
    return (
        <li className={styles.contact}>
            <span>{name}: </span>
            <span>{number}</span>
            <button
                typy="button"
                onClick={onClickHendler}
            >                       
            Delete
            </button>
        </li> 
   ) 
}

ContactsListItm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickHendler: PropTypes.func.isRequired
}