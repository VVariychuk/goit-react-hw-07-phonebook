import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactsList.module.css';

import ContactsListItm from './ContactsListItm'
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'

const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <>
            {contacts.length ?
                <ul className={styles.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <ContactsListItm
                    key={id}
                    name={name}
                    number={number}
                    onClickHendler={()=>onDeleteContact(id)}
                />             
            ))
            }
                </ul> :
                <p>No contacts added</p>
        }
      </>  
    )
};


const mapStateToProps = state => ({
contacts: phonebookSelectors.getFilteredContacts(state)
});

const mapDispatchToProps = dispatch => ({
onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);