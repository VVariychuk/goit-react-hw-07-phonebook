import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactsList.module.css';

import ContactsListItm from './ContactsListItm'
import phonebookActions from '../../redux/phonebook/phonebook-actions';

const ContactsList = ({ contacts, onDeleteContact })=> {
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

const showFilteredContacts = (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({name}) => name.toLowerCase().includes(normalizeFilter))
};

const mapStateToProps = ({phonebook:{contacts, filter}}) => ({
contacts: showFilteredContacts(contacts, filter)
});

const mapDispatchToProps = dispatch => ({
onDeleteContact: id => dispatch(phonebookActions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);