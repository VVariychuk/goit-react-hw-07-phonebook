import React, { Component } from 'react';
// import shortid from 'shortid';
import { connect } from 'react-redux';
import phonebookOperations from './redux/phonebook/phonebook-operations';
import phonebookSelectors from './redux/phonebook/phonebook-selectors';

import Container from './components/Container';
import Section from './components/Section';
import AddContactsForm from './components/AddContactsForm';
import Filter from './components/Filter';
import ContactList from './components/ContactsList';

class App extends Component {
 

  componentDidMount() {
    this.props.fetchContacts();
  };

  render() {    
    return (
      <Container >
        <Section
          title={'Phonebook'}
          children={
            <AddContactsForm />
          }
        />
        <Section
          title={'Contacts'}
          children={
            <>
              <Filter />
              
              <ContactList />
            </>
          }
        />
      </Container>
    );
  };
};

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getLoading(state)
});

const mapDispatchToProps = dispatch => ({
 fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
});


export default connect (mapStateToProps, mapDispatchToProps)(App);